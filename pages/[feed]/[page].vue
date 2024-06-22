<script setup lang="ts">
import imageData from './bingImageData'
import { getRandomNumber } from '../../composables/news';
definePageMeta({
  middleware: "feed",
});

const route = useRoute();
const router = useRouter();
const page = computed(() => +route.params.page || 1);
const feed = computed(() => route.params.feed as keyof typeof feedsInfo);
const isValidFeed = computed(() => !!feedsInfo[feed.value]);

// const transition = ref('slide-right')
const pageNo = computed(() => Number(page.value) || 1);
const displayedPage = ref(pageNo.value);

useHead({
  title: feedsInfo[feed.value]?.title,
});


// if (isValidFeed.value) {
//   await fetchFeed({ page: pageNo.value, feed: feed.value });
// }

const newsList = ref<[]>([]);
const bingImgUrl = ref()
const loading = computed(() => newsList.value.length === 0);
async function getNewsData() {
  const { data } = await $fetch<any>(
    `https://api.rebang.today/v1/items?tab=ithome&sub_tab=today&page=1&version=1`
  );

  const list = JSON.parse(data.list)
  newsList.value = list.map((item: any, index: number) => {
    return {
      title: item.title,
      id: index
    }
  });
}

async function getBingImgUrl() {
  // const jsonData = await $fetch<any>(
  //   "https://raw.onmicrosoft.cn/Bing-Wallpaper-Action/main/data/zh-CN_all.json"
  // );
  // const imgList = JSON.parse(jsonData).data
  const imgList = imageData.data
  const index = getRandomNumber(0, imgList.length)
  const baseUrl = "https://cn.bing.com"
  bingImgUrl.value = baseUrl + imgList[index].url

}
getBingImgUrl()
getNewsData();

</script>

<template>
  <div class="view">
    <!-- <ItemListNav
      :feed="feed"
      :page="page"
      :max-page="maxPage"
    /> -->

    <div :key="displayedPage" class="news-list">
      <LoadSpinner v-if="loading" />
      <template v-else>
        <img class="bing-img" :src="bingImgUrl">
        <ul>
          <PostItem v-for="item in newsList" :key="item.id" :item="item" />
        </ul>
        <ItemListNav />
      </template>
    </div>
  </div>
</template>

<style lang="postcss">
.news-list {
  background-color: #fff;
  border-radius: 2px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);

  & ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
}

.slide-left-enter,
.slide-right-leave-to {
  opacity: 0;
  transform: translate(30px, 0);
}

.slide-left-leave-to,
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}

.item-move,
.item-enter-active,
.item-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.item-enter {
  opacity: 0;
  transform: translate(30px, 0);
}

.item-leave-active {
  position: absolute;
  opacity: 0;
  transform: translate(30px, 0);
}


.bing-img {
  width: 100%;
}
</style>

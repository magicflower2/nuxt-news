<script setup lang="ts">
defineProps<{
  item: any
}>()
</script>

<template>
  <li class="news-item">
    <span class="score" title="Score">{{ item.id + 1 }}</span>
    <span class="title">
      <span class="host"> {{ item.title }}</span>
    </span>
  </li>
</template>

<style lang="postcss">
.news-item {
  background-color: #fff;
  padding: 20px 30px 20px 80px;
  border-bottom: 1px solid #eee;
  position: relative;
  line-height: 20px;

  .score {
    color: #2e495e;
    font-size: 1.1em;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 0;
    width: 80px;
    text-align: center;
    margin-top: -10px;
  }

  .meta,
  .host {
    font-size: 0.85em;
    color: #595959;

    & span {
      margin: 0 0.2rem;
    }

    & a {
      color: #595959;
      text-decoration: underline;

      &:hover {
        color: #00C48D;
      }
    }
  }
}
</style>

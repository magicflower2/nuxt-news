import { $fetch } from "ofetch";

import { feedsInfo, validFeeds } from "~/composables/api";

import { baseURL } from "~/server/constants";

const newsUrl = `https://news.icodeq.com/api?index=1&cache=2023-8-20&origin=163`;

async function fetchNews() {
  const { fetchItem } = await import("./item.get");
  const res = await $fetch(newsUrl);
  console.log("res", res);
}

export default defineEventHandler((event) => {
  configureSWRHeaders(event);
  const { page = "1", feed = "news" } = getQuery(event) as {
    page: string;
    feed: keyof typeof feedsInfo;
  };

  if (!validFeeds.includes(feed) || String(Number(page)) !== page) {
    throw createError({
      statusCode: 422,
      statusMessage: `Must provide one of ${validFeeds.join(
        ", "
      )} and a valid page number.`,
    });
  }

  return fetchNews();
});

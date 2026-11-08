import { getCollection } from "astro:content";

/** Published posts, newest first. Drafts show only in `npm run dev`. */
export async function getNews() {
  const posts = await getCollection("news", ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

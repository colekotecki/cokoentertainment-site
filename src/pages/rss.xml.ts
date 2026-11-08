import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { STUDIO } from "../site";
import { getNews } from "../lib/news";

export async function GET(context: APIContext) {
  const posts = await getNews();
  return rss({
    title: `${STUDIO.name} News`,
    description: "Devlogs, patch notes and announcements.",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/news/${post.id}/`,
    })),
  });
}

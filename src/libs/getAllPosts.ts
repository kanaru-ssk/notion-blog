import type { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Post } from "@/types/notion";
import { notion } from "./client";
import { notionResponseToPost } from "./notionResponseToPost";

export const getAllPosts = async (): Promise<Post[]> => {
  const allResults: QueryDatabaseResponse["results"] = [];
  let hasMore = true;
  while (hasMore) {
    const res = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
      page_size: 100,
    });
    hasMore = res.has_more;
    allResults.push(...res.results);
  }

  const allPosts = allResults
    .map(notionResponseToPost)
    .filter((v): v is Post => Boolean(v));
  return allPosts;
};

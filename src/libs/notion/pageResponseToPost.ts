import type { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Post } from "@/types/notion";
import { richTextToPlainText } from "./richTextToPlainText";

export const pageResponseToPost = (value: GetPageResponse): Post => {
  if (!("properties" in value))
    throw new Error("value is not PageObjectResponse");
  if (value.properties.Title.type !== "title")
    throw new Error("Title is not title");
  if (value.properties.Description.type !== "rich_text")
    throw new Error("Description is not rich_text");

  return {
    id: value.id,
    title: richTextToPlainText(value.properties.Title.title),
    description: richTextToPlainText(value.properties.Description.rich_text),
    createdDate: new Date(value.created_time).toLocaleDateString(),
  };
};

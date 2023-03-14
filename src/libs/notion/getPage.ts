import { notion } from "./client";
import { richTextToPlainText } from "./richTextToPlainText";
import type { Post } from "@/types/notion";

export const getPage = async (page_id: string): Promise<Post> => {
  const result = await notion.pages.retrieve({ page_id });
  if (!("properties" in result))
    throw new Error("result is not PageObjectResponse");
  if (result.properties.Title.type !== "title")
    throw new Error("Title is not title");
  if (result.properties.Description.type !== "rich_text")
    throw new Error("Description is not rich_text");
  if (result.properties.Date.type !== "date")
    throw new Error("Date is not date");

  const title = richTextToPlainText(result.properties.Title.title);
  const description = richTextToPlainText(
    result.properties.Description.rich_text
  );
  const date = result.properties.Date.date?.start || "";

  return {
    id: result.id,
    title,
    description,
    date,
  };
};

import type { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Post } from "@/types/notion";
import { defaultSeo } from "@/constants/defaultSeo";
import { richTextToPlainText } from "./richTextToPlainText";

export const pageResponseToPost = (value: GetPageResponse): Post | null => {
  if (!("properties" in value)) return null;

  const title =
    value.properties.Title?.type === "title"
      ? richTextToPlainText(value.properties.Title.title)
      : "No Title";
  const slug =
    value.properties.Slug?.type === "rich_text" &&
    value.properties.Slug.rich_text.length !== 0
      ? richTextToPlainText(value.properties.Slug.rich_text)
      : value.id;
  const description =
    value.properties.Description?.type === "rich_text"
      ? richTextToPlainText(value.properties.Description.rich_text)
      : "";
  const createdDate =
    (value.properties.CreateDate?.type === "date" &&
      value.properties.CreateDate.date &&
      new Date(value.properties.CreateDate.date.start).toLocaleDateString()) ||
    new Date(value.created_time).toLocaleDateString();
  const coverImageSrc =
    value.properties.Image?.type === "files" &&
    value.properties.Image.files[0]?.type === "file"
      ? value.properties.Image.files[0].file.url
      : defaultSeo.coverImageSrc;

  return {
    id: value.id,
    title,
    slug,
    description,
    createdDate,
    coverImageSrc,
  };
};

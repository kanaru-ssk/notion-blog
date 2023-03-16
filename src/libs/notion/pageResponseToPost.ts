import type { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Post } from "@/types/notion";
import { defaultSeo } from "@/constants/defaultSeo";
import { richTextToPlainText } from "./richTextToPlainText";

export const pageResponseToPost = (value: GetPageResponse): Post => {
  if (!("properties" in value))
    return {
      id: value.id,
      isNotFound: true,
    };

  const title =
    value.properties.Title?.type === "title"
      ? richTextToPlainText(value.properties.Title.title)
      : "No Title";
  const description =
    value.properties.Description?.type === "rich_text"
      ? richTextToPlainText(value.properties.Description.rich_text)
      : "";
  const createdDate =
    (value.properties.CreateDate.type === "date" &&
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
    isNotFound: false,
    title,
    description,
    createdDate,
    coverImageSrc,
  };
};

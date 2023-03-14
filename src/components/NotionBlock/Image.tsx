"use client";

import NextImage from "next/image";
import { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import { richTextToPlainText } from "@/libs/notion";

type Props = {
  block: BlockWithChildren<ImageBlockObjectResponse>;
};

const Image = ({ block }: Props) => {
  const src =
    block.image.type === "external"
      ? block.image.external.url
      : block.image.file.url;
  const caption = block.image.caption
    ? richTextToPlainText(block.image.caption)
    : "";
  return (
    <figure>
      <NextImage src={src} alt={caption} width={100} height={100} />
      {caption && (
        <figcaption className="text-sm text-gray-400">{caption}</figcaption>
      )}
    </figure>
  );
};

export default Image;

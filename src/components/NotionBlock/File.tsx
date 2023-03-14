"use client";

import Link from "next/link";
import { FileBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import { richTextToPlainText } from "@/libs/notion";

type Props = {
  block: BlockWithChildren<FileBlockObjectResponse>;
};

const File = ({ block }: Props) => {
  const src_file =
    block.file.type === "external"
      ? block.file.external.url
      : block.file.file.url;
  const splitSourceArray = src_file.split("/");
  const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
  const caption_file = block.file.caption
    ? richTextToPlainText(block.file.caption)
    : "";
  return (
    <figure>
      <div>
        <Link href={src_file} passHref>
          {lastElementInArray.split("?")[0]}
        </Link>
      </div>
      {caption_file && <figcaption>{caption_file}</figcaption>}
    </figure>
  );
};

export default File;

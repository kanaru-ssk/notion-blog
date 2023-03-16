"use client";

import Link from "next/link";
import type { FileBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import { richTextToPlainText } from "@/libs/notion";
import Image from "next/image";

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
    <figure className="my-5">
      <Link
        href={src_file}
        passHref
        className="font-medium text-blue-600 dark:text-blue-500"
      >
        <span className="group flex gap-2 items-center w-fit">
          <Image src="clip-icon.svg" alt="clip-icon" width={16} height={16} />
          <span className="group-hover:underline">
            {lastElementInArray.split("?")[0]}
          </span>
          {caption_file && (
            <figcaption className="text-xs text-gray-400">
              {caption_file}
            </figcaption>
          )}
        </span>
      </Link>
    </figure>
  );
};

export default File;

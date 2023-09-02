import type { BookmarkBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Image from "next/image";
import Link from "next/link";
import { richTextToString } from "@/libs";
import type { BlockWithChildren } from "@/types/notion";
import clipIcon from "../images/clip-icon.svg";

type Props = {
  block: BlockWithChildren<BookmarkBlockObjectResponse>;
};

export const Bookmark = ({ block }: Props) => {
  const { url, caption } = block.bookmark;
  return (
    <figure className="my-5">
      <Link
        href={url}
        passHref
        className="inline-block w-full truncate font-medium text-blue-600 dark:text-blue-500"
      >
        <span className="group flex w-full items-center gap-2">
          <Image src={clipIcon} alt="clip-icon" width={16} height={16} />
          <span className=" shrink truncate group-hover:underline">{url}</span>
          {caption && (
            <figcaption className="shrink-0 text-xs text-gray-400">
              {richTextToString(caption)}
            </figcaption>
          )}
        </span>
      </Link>
    </figure>
  );
};

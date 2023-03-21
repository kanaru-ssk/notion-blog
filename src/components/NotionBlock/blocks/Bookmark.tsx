import Link from "next/link";
import type { BookmarkBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Image from "next/image";
import type { BlockWithChildren } from "@/types/notion";
import { richTextToString } from "@/libs/notion";

type Props = {
  block: BlockWithChildren<BookmarkBlockObjectResponse>;
};

const Bookmark = ({ block }: Props) => {
  const { url, caption } = block.bookmark;
  return (
    <figure className="my-5">
      <Link
        href={url}
        passHref
        className="inline-block w-full truncate font-medium text-blue-600 dark:text-blue-500"
      >
        <span className="group flex w-full items-center gap-2">
          <Image src="clip-icon.svg" alt="clip-icon" width={16} height={16} />
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

export default Bookmark;
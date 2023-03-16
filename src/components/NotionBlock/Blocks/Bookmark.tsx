"use client";

import Link from "next/link";
import type { BookmarkBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<BookmarkBlockObjectResponse>;
};

const Bookmark = ({ block }: Props) => {
  return (
    <Link
      href={block.bookmark.url}
      target="_brank"
      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
    >
      {block.bookmark.url}
    </Link>
  );
};

export default Bookmark;

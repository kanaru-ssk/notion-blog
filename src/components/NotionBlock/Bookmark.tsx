"use client";

import Link from "next/link";
import { BookmarkBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<BookmarkBlockObjectResponse>;
};

const Bookmark = ({ block }: Props) => {
  return (
    <Link
      href={block.bookmark.url}
      target="_brank"
      className="text-blue hover:text-gray underline"
    >
      {block.bookmark.url}
    </Link>
  );
};

export default Bookmark;

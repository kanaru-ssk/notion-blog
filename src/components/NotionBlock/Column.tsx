"use client";

import type { ColumnBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import NotionBlock from ".";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<ColumnBlockObjectResponse>;
};

const Column = ({ block }: Props) => {
  return (
    <div>
      {block.children &&
        block.children.map((child) => (
          <NotionBlock block={child} key={child.id} />
        ))}
    </div>
  );
};

export default Column;

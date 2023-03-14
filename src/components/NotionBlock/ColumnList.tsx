"use client";

import { ColumnListBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import NotionBlock from ".";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<ColumnListBlockObjectResponse>;
};

const ColumnList = ({ block }: Props) => {
  return (
    <div className="my-4 flex w-full items-center justify-around">
      {block.children &&
        block.children.map((block) => (
          <NotionBlock block={block} key={block.id} />
        ))}
    </div>
  );
};

export default ColumnList;

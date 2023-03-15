"use client";

import type { ChildPageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import NotionBlock from "@/components/NotionBlock";

type Props = {
  block: BlockWithChildren<ChildPageBlockObjectResponse>;
};

const ChildPage = ({ block }: Props) => {
  return (
    <div>
      <strong>{block.child_page.title}</strong>
      {block.children &&
        block.children.map((child) => (
          <NotionBlock block={child} key={child.id} />
        ))}
    </div>
  );
};

export default ChildPage;

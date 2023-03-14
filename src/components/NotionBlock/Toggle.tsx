"use client";

import { Fragment } from "react";
import { ToggleBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import NotionBlock from "@/components/NotionBlock";
import RichText from "@/components/RichText";

type Props = {
  block: BlockWithChildren<ToggleBlockObjectResponse>;
};

const Toggle = ({ block }: Props) => {
  return (
    <details className="my-4 rounded-md border-2 border-gray-200 p-2">
      <summary className="cursor-pointer">
        <RichText text={block.toggle.rich_text} />
      </summary>
      <div className="ml-4">
        {block.children?.map((child) => (
          <Fragment key={child.id}>
            {<NotionBlock block={child} key={child.id} />}
          </Fragment>
        ))}
      </div>
    </details>
  );
};

export default Toggle;

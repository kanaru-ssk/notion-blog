"use client";

import { Fragment } from "react";
import type { NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import NotionBlock from "@/components/NotionBlock";
import RichText from "@/components/RichText";

type Props = {
  block: BlockWithChildren<NumberedListItemBlockObjectResponse>;
};

const NumberedListItem = ({ block }: Props) => {
  return (
    <li>
      <RichText text={block.numbered_list_item.rich_text} />
      {block.children?.map((child) => (
        <Fragment key={child.id}>
          {<NotionBlock block={child} key={child.id} />}
        </Fragment>
      ))}
    </li>
  );
};

export default NumberedListItem;

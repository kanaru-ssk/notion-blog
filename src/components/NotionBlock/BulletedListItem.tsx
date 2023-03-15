"use client";

import { Fragment } from "react";
import type { BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import NotionBlock from "@/components/NotionBlock";
import RichText from "@/components/RichText";

type Props = {
  block: BlockWithChildren<BulletedListItemBlockObjectResponse>;
};

const BulletedListItem = ({ block }: Props) => {
  return (
    <li>
      <RichText text={block.bulleted_list_item.rich_text} />
      {block.children?.map((child) => (
        <Fragment key={child.id}>
          {<NotionBlock block={child} key={child.id} />}
        </Fragment>
      ))}
    </li>
  );
};

export default BulletedListItem;

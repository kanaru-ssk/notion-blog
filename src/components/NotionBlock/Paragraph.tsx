"use client";

import { Fragment } from "react";
import { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import NotionBlock from "@/components/NotionBlock";
import RichText from "@/components/RichText";

type Props = {
  block: BlockWithChildren<ParagraphBlockObjectResponse>;
};

const Paragraph = ({ block }: Props) => {
  return (
    <>
      <p className="my-4">
        <RichText text={block.paragraph.rich_text} />
      </p>
      <div className="ml-4">
        {block.children?.map((child) => (
          <Fragment key={child.id}>
            {<NotionBlock block={child} key={child.id} />}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Paragraph;

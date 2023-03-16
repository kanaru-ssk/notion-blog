"use client";

import Bookmark from "./Bookmark";
import BulletedList from "./BulletedList";
import BulletedListItem from "./BulletedListItem";
import ChildPage from "./ChildPage";
import Code from "./Code";
import Column from "./Column";
import ColumnList from "./ColumnList";
import Divider from "./Divider";
import File from "./File";
import Heading1 from "./Heading1";
import Heading2 from "./Heading2";
import Heading3 from "./Heading3";
import Image from "./Image";
import NumberedList from "./NumberedList";
import NumberedListItem from "./NumberedListItem";
import Paragraph from "./Paragraph";
import Quote from "./Quote";
import Table from "./Table";
import ToDo from "./ToDo";
import ToDoList from "./ToDoList";
import Toggle from "./Toggle";
import type { ExpandedBlockObjectResponse } from "@/types/notion";

type Props = {
  block: ExpandedBlockObjectResponse;
};

const NotionBlock = ({ block }: Props) => {
  switch (block.type) {
    case "paragraph":
      return <Paragraph block={block} />;
    case "heading_1":
      return <Heading1 block={block} />;
    case "heading_2":
      return <Heading2 block={block} />;
    case "heading_3":
      return <Heading3 block={block} />;
    case "bulleted_list":
      return <BulletedList block={block} />;
    case "numbered_list":
      return <NumberedList block={block} />;
    case "bulleted_list_item":
      return <BulletedListItem block={block} />;
    case "numbered_list_item":
      return <NumberedListItem block={block} />;
    case "to_do_list":
      return <ToDoList block={block} />;
    case "to_do":
      return <ToDo block={block} />;
    case "toggle":
      return <Toggle block={block} />;
    case "child_page":
      return <ChildPage block={block} />;
    case "image":
      // eslint-disable-next-line jsx-a11y/alt-text
      return <Image block={block} />;
    case "divider":
      return <Divider />;
    case "quote":
      return <Quote block={block} />;
    case "code":
      return <Code block={block} />;
    case "file":
      return <File block={block} />;
    case "bookmark":
      return <Bookmark block={block} />;
    case "table":
      return <Table block={block} />;
    case "column_list":
      return <ColumnList block={block} />;
    case "column":
      return <Column block={block} />;
    default:
      return (
        <>
          `❌ Unsupported block ($
          {block.type === "unsupported"
            ? "unsupported by Notion API"
            : block.type}
          )`
        </>
      );
  }
};
export default NotionBlock;

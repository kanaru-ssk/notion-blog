"use client";

import type { ExpandedBlockObjectResponse } from "@/types/notion";
import Bookmark from "./Blocks/Bookmark";
import BulletedList from "./Blocks/BulletedList";
import BulletedListItem from "./Blocks/BulletedListItem";
import Callout from "./Blocks/Callout";
import Code from "./Blocks/Code";
import Column from "./Blocks/Column";
import ColumnList from "./Blocks/ColumnList";
import Divider from "./Blocks/Divider";
import Embed from "./Blocks/Embed";
import File from "./Blocks/File";
import Heading1 from "./Blocks/Heading1";
import Heading2 from "./Blocks/Heading2";
import Heading3 from "./Blocks/Heading3";
import Image from "./Blocks/Image";
import NumberedList from "./Blocks/NumberedList";
import NumberedListItem from "./Blocks/NumberedListItem";
import Paragraph from "./Blocks/Paragraph";
import Quote from "./Blocks/Quote";
import Table from "./Blocks/Table";
import ToDo from "./Blocks/ToDo";
import ToDoList from "./Blocks/ToDoList";
import Toggle from "./Blocks/Toggle";
import Video from "./Blocks/Video";

type Props = {
  block: ExpandedBlockObjectResponse;
};

const NotionBlock = ({ block }: Props) => {
  switch (block.type) {
    case "bookmark":
      return <Bookmark block={block} />;
    case "bulleted_list":
      return <BulletedList block={block} />;
    case "bulleted_list_item":
      return <BulletedListItem block={block} />;
    case "callout":
      return <Callout block={block} />;
    case "code":
      return <Code block={block} />;
    case "column":
      return <Column block={block} />;
    case "column_list":
      return <ColumnList block={block} />;
    case "divider":
      return <Divider />;
    case "embed":
      return <Embed block={block} />;
    case "file":
      return <File block={block} />;
    case "heading_1":
      return <Heading1 block={block} />;
    case "heading_2":
      return <Heading2 block={block} />;
    case "heading_3":
      return <Heading3 block={block} />;
    case "image":
      // eslint-disable-next-line jsx-a11y/alt-text
      return <Image block={block} />;
    case "numbered_list":
      return <NumberedList block={block} />;
    case "numbered_list_item":
      return <NumberedListItem block={block} />;
    case "paragraph":
      return <Paragraph block={block} />;
    case "quote":
      return <Quote block={block} />;
    case "table":
      return <Table block={block} />;
    case "to_do":
      return <ToDo block={block} />;
    case "to_do_list":
      return <ToDoList block={block} />;
    case "toggle":
      return <Toggle block={block} />;
    case "video":
      return <Video block={block} />;
    default:
      return null;
  }
};

export default NotionBlock;

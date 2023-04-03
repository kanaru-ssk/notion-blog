import type { ExpandedBlockObjectResponse } from "@/types/notion";
import { Audio } from "./blocks/Audio";
import { Bookmark } from "./blocks/Bookmark";
import { BulletedList } from "./blocks/BulletedList";
import { BulletedListItem } from "./blocks/BulletedListItem";
import { Callout } from "./blocks/Callout";
import { Code } from "./blocks/Code";
import { Column } from "./blocks/Column";
import { ColumnList } from "./blocks/ColumnList";
import { Divider } from "./blocks/Divider";
import { Embed } from "./blocks/Embed";
import { File } from "./blocks/File";
import { Heading1 } from "./blocks/Heading1";
import { Heading2 } from "./blocks/Heading2";
import { Heading3 } from "./blocks/Heading3";
import { Image } from "./blocks/Image";
import { NumberedList } from "./blocks/NumberedList";
import { NumberedListItem } from "./blocks/NumberedListItem";
import { Paragraph } from "./blocks/Paragraph";
import { Pdf } from "./blocks/Pdf";
import { Quote } from "./blocks/Quote";
import { Table } from "./blocks/Table";
import { ToDo } from "./blocks/ToDo";
import { ToDoList } from "./blocks/ToDoList";
import { Toggle } from "./blocks/Toggle";
import { Video } from "./blocks/Video";

type Props = {
  block: ExpandedBlockObjectResponse;
};

export const NotionBlock = ({ block }: Props) => {
  switch (block.type) {
    case "audio":
      return <Audio block={block} />;
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
    case "pdf":
      return <Pdf block={block} />;
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

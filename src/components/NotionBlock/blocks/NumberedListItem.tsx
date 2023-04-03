import type { NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionBlock } from "@/components/NotionBlock";
import { RichText } from "@/components/NotionBlock/blocks/RichText";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<NumberedListItemBlockObjectResponse>;
};

export const NumberedListItem = ({ block }: Props) => {
  return (
    <li className="m-1.5">
      <RichText text={block.numbered_list_item.rich_text} />
      {block.children?.map((child) => (
        <NotionBlock block={child} key={child.id} />
      ))}
    </li>
  );
};

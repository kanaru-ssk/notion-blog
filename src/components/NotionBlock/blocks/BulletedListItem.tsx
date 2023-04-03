import type { BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionBlock } from "@/components/NotionBlock";
import { RichText } from "@/components/NotionBlock/blocks/RichText";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<BulletedListItemBlockObjectResponse>;
};

export const BulletedListItem = ({ block }: Props) => {
  return (
    <li className="m-1.5">
      <RichText text={block.bulleted_list_item.rich_text} />
      {block.children?.map((child) => (
        <NotionBlock block={child} key={child.id} />
      ))}
    </li>
  );
};

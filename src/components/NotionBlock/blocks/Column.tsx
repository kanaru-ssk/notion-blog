import type { ColumnBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import NotionBlock from "@/components/NotionBlock";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<ColumnBlockObjectResponse>;
};

const Column = ({ block }: Props) => {
  return (
    <div className="min-w-0 flex-1 break-words">
      {block.children &&
        block.children.map((child) => (
          <NotionBlock block={child} key={child.id} />
        ))}
    </div>
  );
};

export default Column;

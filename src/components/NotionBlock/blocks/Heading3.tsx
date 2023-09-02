import type { Heading3BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "@/components/NotionBlock/blocks/RichText";

type Props = {
  block: Heading3BlockObjectResponse;
};

export const Heading3 = ({ block }: Props) => {
  return (
    <h3 className="mb-2 mt-5 text-xl font-bold">
      <RichText text={block.heading_3.rich_text} />
    </h3>
  );
};

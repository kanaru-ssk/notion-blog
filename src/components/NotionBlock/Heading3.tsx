"use client";

import { Heading3BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import RichText from "@/components/RichText";

type Props = {
  block: Heading3BlockObjectResponse;
};

const Heading3 = ({ block }: Props) => {
  return (
    <h3 className="my-4 text-xl font-bold">
      <RichText text={block.heading_3.rich_text} />
    </h3>
  );
};

export default Heading3;
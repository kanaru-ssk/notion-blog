import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import NextImage from "next/image";
import { richTextToString } from "@/libs/notion";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<ImageBlockObjectResponse>;
};

export const Image = ({ block }: Props) => {
  const src =
    block.image.type === "external"
      ? block.image.external.url
      : block.image.file.url;
  const caption = block.image.caption
    ? richTextToString(block.image.caption)
    : "";
  return (
    <figure className="my-6">
      <NextImage
        src={src}
        alt={caption}
        width={700}
        height={475}
        className="h-auto w-full drop-shadow"
        title={caption}
      />
      {caption && (
        <figcaption className="text-xs text-gray-400">{caption}</figcaption>
      )}
    </figure>
  );
};

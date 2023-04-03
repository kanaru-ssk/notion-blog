import type { EmbedBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import { Facebook } from "./embed/Facebook";
import { Instagram } from "./embed/Instagram";
import { TikTok } from "./embed/TikTok";
import { Twitter } from "./embed/Twitter";

type Props = {
  block: BlockWithChildren<EmbedBlockObjectResponse>;
};

export const Embed = ({ block }: Props) => {
  const { url } = block.embed;

  if (url.includes("instagram.com")) return <Instagram url={url} />;
  if (url.includes("facebook.com")) return <Facebook url={url} />;
  if (url.includes("twitter.com")) return <Twitter url={url} />;
  if (url.includes("tiktok.com")) return <TikTok url={url} />;
  return (
    <div className="my-5">
      <iframe
        src={url}
        height={500}
        className="w-full overflow-hidden"
      ></iframe>
    </div>
  );
};

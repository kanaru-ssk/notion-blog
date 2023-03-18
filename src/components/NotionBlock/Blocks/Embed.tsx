"use client";

import type { EmbedBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import Instagram from "./embed/Instagram";
import Twitter from "./embed/Twitter";
import TikTok from "./embed/TikTok";
import Facebook from "./embed/Facebook";

type Props = {
  block: BlockWithChildren<EmbedBlockObjectResponse>;
};

const Embed = ({ block }: Props) => {
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

export default Embed;

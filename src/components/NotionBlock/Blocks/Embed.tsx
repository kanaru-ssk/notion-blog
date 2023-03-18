"use client";

import type { EmbedBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import Instagram from "./enbed/Instagram";
import Twitter from "./enbed/Twitter";
import TikTok from "./enbed/TikTok";
import Facebook from "./enbed/Facebook";

type Props = {
  block: BlockWithChildren<EmbedBlockObjectResponse>;
};

const Embed = ({ block }: Props) => {
  const { url } = block.embed;
  const platform = url.includes("instagram.com")
    ? "instagram"
    : url.includes("twitter.com")
    ? "twitter"
    : url.includes("tiktok.com")
    ? "tiktok"
    : url.includes("facebook.com")
    ? "facebook"
    : "other";

  if (platform === "instagram") return <Instagram url={url} />;
  if (platform === "facebook") return <Facebook url={url} />;
  if (platform === "twitter") return <Twitter url={url} />;
  if (platform === "tiktok") return <TikTok url={url} />;

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

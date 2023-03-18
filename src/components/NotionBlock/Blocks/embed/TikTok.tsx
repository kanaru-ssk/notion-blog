"use client";

import Script from "next/script";

type Props = {
  url: string;
};

const TikTok = ({ url }: Props) => {
  return (
    <div className="my-5">
      <blockquote
        cite={url}
        data-video-id="7073235879690505514"
        className="tiktok-embed min-w[325px] max-w-[605px]"
      >
        <section></section>
      </blockquote>
      <Script async src="https://www.tiktok.com/embed.js" />
    </div>
  );
};

export default TikTok;

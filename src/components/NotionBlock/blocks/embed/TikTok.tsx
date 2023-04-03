import Script from "next/script";

type Props = {
  url: string;
};

export const TikTok = ({ url }: Props) => {
  const TikTokVideoId = url.match(/\/video\/(\d+)/)?.[1];
  return (
    <div className="my-5">
      <blockquote
        cite={url}
        data-video-id={TikTokVideoId}
        className="tiktok-embed min-w[325px] max-w-[605px]"
      >
        <section></section>
      </blockquote>
      <Script async defer src="https://www.tiktok.com/embed.js" />
    </div>
  );
};

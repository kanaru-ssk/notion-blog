import Script from "next/script";
import Link from "next/link";

type Props = {
  url: string;
};

const Twitter = ({ url }: Props) => {
  const isTweet = url.includes("/status/");
  if (isTweet)
    return (
      <div className="my-4 max-h-96 overflow-auto">
        <blockquote className="twitter-tweet">
          <Link
            href={url}
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            View this tweet on Twitter
          </Link>
        </blockquote>
        <Script async defer src="https://platform.twitter.com/widgets.js" />
      </div>
    );
  return (
    <div className="my-4 max-h-96 overflow-auto">
      <Link
        href={url}
        className="twitter-timeline w-full bg-white text-center font-medium leading-[0] text-blue-600 hover:underline dark:text-blue-500"
        target="_blank"
      >
        View on Twitter
      </Link>
      <Script async defer src="https://platform.twitter.com/widgets.js" />
    </div>
  );
};

export default Twitter;

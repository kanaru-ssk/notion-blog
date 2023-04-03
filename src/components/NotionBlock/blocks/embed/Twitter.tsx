import Link from "next/link";
import Script from "next/script";
import { useReducer, useRef } from "react";
import { useMutationObserver } from "@/hooks/useMutationObserver";

type Props = {
  url: string;
};

export const Twitter = ({ url }: Props) => {
  const isTweet = url.includes("/status/");
  if (isTweet) return <Tweet url={url} />;
  return <Timeline url={url} />;
};

const Tweet = ({ url }: Props) => {
  return (
    <div className="my-4">
      <blockquote className="twitter-tweet" data-lang="ja">
        <Skeleton url={url} />
      </blockquote>
      <Script async defer src="https://platform.twitter.com/widgets.js" />
    </div>
  );
};

const Timeline = ({ url }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoading, onLoaded] = useReducer(() => false, true);
  useMutationObserver({
    ref: ref,
    callback: () =>
      ref.current
        ?.getElementsByTagName("iframe")[0]
        .addEventListener("load", onLoaded),
    options: { childList: true },
  });
  return (
    <div className="my-4 min-h-[600px]" ref={ref}>
      {isLoading && <Skeleton url={url} />}
      <Link
        href={url}
        className="twitter-timeline w-full bg-white text-center font-medium leading-[0] text-blue-600 hover:underline dark:text-blue-500"
        data-height={600}
        target="_blank"
      ></Link>
      <Script async defer src="https://platform.twitter.com/widgets.js" />
    </div>
  );
};

const Skeleton = ({ url }: Props) => {
  return (
    <div className="relative rounded-lg bg-white drop-shadow ">
      <div className="flex h-[600px] animate-pulse flex-col justify-between px-4 pb-4 pt-3">
        <div>
          <div className="flex items-center gap-1">
            <div className="h-12 w-12 rounded-full bg-gray-200"></div>
            <div className="flex-1">
              <div className="h-4 w-24 rounded bg-gray-200"></div>
              <div className="mt-1 h-4 w-16 rounded bg-gray-200"></div>
            </div>
          </div>
          <div className="my-3 h-64 rounded bg-gray-200"></div>
          <div className="flex flex-col gap-1">
            <div className="h-4 w-24 rounded bg-gray-200"></div>
            <div className="h-4"></div>
            <div className="h-4 w-64 rounded bg-gray-200"></div>
            <div className="h-4 w-36 rounded bg-gray-200"></div>
            <div className="h-4 w-48 rounded bg-gray-200"></div>
            <div className="h-4"></div>
            <div className="h-4 w-24 rounded bg-gray-200"></div>
          </div>
        </div>
        <div>
          <hr />
          <div className="mt-8 h-8 rounded-full border border-gray-200"></div>
        </div>
      </div>
      <div className="absolute top-48 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center gap-4">
        <Link
          href={url}
          className="text-center text-sm font-semibold text-blue-600"
          target="_blank"
        >
          View on Twitter
        </Link>
      </div>
    </div>
  );
};

import Script from "next/script";
import { useReducer, useRef } from "react";
import { useMutationObserver } from "@/hooks/useMutationObserver";

type Props = {
  url: string;
};

export const Facebook = ({ url }: Props) => {
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
    <div className="relative my-5">
      {isLoading && <Skeleton />}
      <div className="fb-post min-h-[328px]" data-href={url} ref={ref}></div>
      <Script
        async
        defer
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"
      />
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="absolute top-0 w-full min-w-[350px] max-w-[750px] bg-white drop-shadow">
      <div className="animate-pulse">
        <div className="h-64 bg-gray-200"></div>
        <div className="flex gap-2 p-4">
          <div className="h-10 w-10 rounded-full bg-gray-200"></div>
          <div className="flex-1">
            <div className="h-4 rounded bg-gray-200"></div>
            <div className="mt-2 h-4 w-1/2 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

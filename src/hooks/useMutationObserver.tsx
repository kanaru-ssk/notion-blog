"use client";

import { RefObject, useEffect } from "react";

type Props<T> = {
  ref: RefObject<T>;
  callback: MutationCallback;
  options?: MutationObserverInit | undefined;
};

export const useMutationObserver = <T extends HTMLElement>({
  ref,
  callback,
  options,
}: Props<T>) => {
  useEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver(callback);
      observer.observe(ref.current, options);
      return () => observer.disconnect();
    }
  }, [ref, callback, options]);
};

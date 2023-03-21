import { useEffect } from "react";
import type { RefObject } from "react";

type Props<T> = {
  ref: RefObject<T>;
  callback: MutationCallback;
  options?: MutationObserverInit;
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

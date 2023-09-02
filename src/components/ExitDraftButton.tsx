"use client";
import { useRouter, usePathname } from "next/navigation";

export const DisableDraftButton = () => {
  const { push, refresh } = useRouter();
  const path = usePathname();
  const exitPreview = () => {
    push(`/api/disable-draft/?path=${path}`);
    refresh();
  };

  return (
    <button
      onClick={exitPreview}
      className="rounded border border-gray-400 bg-gray-100 px-3 py-1"
    >
      disable draft mode
    </button>
  );
};

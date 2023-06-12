import { useRouter } from "next/router";

export const ExitPreviewButton = () => {
  const { asPath, push } = useRouter();
  const exitPreview = () => push(`/api/delete-preview/?path=${asPath}`);

  return (
    <button
      onClick={exitPreview}
      className="rounded border border-gray-400 bg-gray-100 px-3 py-1"
    >
      exit preview mode
    </button>
  );
};

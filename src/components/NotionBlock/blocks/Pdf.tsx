import type { PdfBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<PdfBlockObjectResponse>;
};

export const Pdf = ({ block: { pdf } }: Props) => {
  return (
    <div className="my-4 leading-8">
      <object
        data={pdf.type === "file" ? pdf.file.url : pdf.external.url}
        type="application/pdf"
        className="h-auto w-full"
        aria-labelledby="PDF document"
      >
        <p>Your browser does not support PDFs.</p>
        <Link
          href={pdf.type === "file" ? pdf.file.url : pdf.external.url}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Download the PDF
        </Link>
      </object>
    </div>
  );
};

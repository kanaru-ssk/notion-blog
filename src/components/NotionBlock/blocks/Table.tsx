import type { TableBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Fragment } from "react";
import { RichText } from "@/components/NotionBlock/blocks/RichText";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<TableBlockObjectResponse>;
};

export const Table = ({ block }: Props) => {
  return (
    <table className="my-4 mx-auto block w-auto border-collapse text-sm">
      <tbody>
        {block.children?.map((child, childIndex) => {
          return (
            <tr key={child.id}>
              {child.type === "table_row" &&
                child.table_row?.cells?.map((cell, cellIndex) => {
                  return (
                    <Fragment key={`${cell[0].plain_text}-${cellIndex}`}>
                      {(block.table.has_column_header && childIndex == 0) ||
                      (block.table.has_row_header && cellIndex == 0) ? (
                        <th className="border border-gray-200 bg-gray-100 p-2">
                          <RichText text={cell} />
                        </th>
                      ) : (
                        <td className="border border-gray-200 p-2">
                          <RichText text={cell} />
                        </td>
                      )}
                    </Fragment>
                  );
                })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

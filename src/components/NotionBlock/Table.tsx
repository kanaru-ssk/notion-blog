"use client";

import type { TableBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import RichText from "@/components/RichText";

type Props = {
  block: BlockWithChildren<TableBlockObjectResponse>;
};

const Table = ({ block }: Props) => {
  return (
    <table className="block my-4 mx-auto w-auto border-collapse text-sm">
      <tbody>
        {block.children?.map((child, childIndex) => {
          return (
            <tr key={child.id}>
              {child.type === "table_row" &&
                child.table_row?.cells?.map((cell, cellIndex) => {
                  return (
                    <>
                      {(block.table.has_column_header && childIndex == 0) ||
                      (block.table.has_row_header && cellIndex == 0) ? (
                        <th className="bg-gray-100 p-2 border border-gray-200">
                          <RichText text={cell} />
                        </th>
                      ) : (
                        <td className="p-2 border border-gray-200">
                          <RichText text={cell} />
                        </td>
                      )}
                    </>
                  );
                })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

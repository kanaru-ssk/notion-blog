"use client";

import type { TableBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import RichText from "@/components/RichText";

type Props = {
  block: BlockWithChildren<TableBlockObjectResponse>;
};

const Table = ({ block }: Props) => {
  return (
    <table>
      <tbody>
        {block.children?.map((child, childIndex) => {
          const RowElement =
            block.table.has_column_header && childIndex == 0 ? "th" : "td";
          return (
            <tr key={child.id}>
              {child.type === "table_row" &&
                child.table_row?.cells?.map((cell, cellIndex) => {
                  return (
                    <RowElement key={`${cell[0].plain_text}-${cellIndex}`}>
                      <RichText text={cell} />
                    </RowElement>
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

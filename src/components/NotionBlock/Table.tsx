"use client";

import { TableBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import RichText from "@/components/RichText";

type Props = {
  block: BlockWithChildren<TableBlockObjectResponse>;
};

const Table = ({ block }: Props) => {
  return (
    <table>
      <tbody>
        {block.children?.map((child, i) => {
          const RowElement =
            block.table.has_column_header && i == 0 ? "th" : "td";
          return (
            <tr key={child.id}>
              {child.type === "table_row" &&
                child.table_row?.cells?.map((cell, i) => {
                  return (
                    <RowElement key={`${cell[0].plain_text}-${i}`}>
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

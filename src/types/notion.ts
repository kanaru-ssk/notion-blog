import {
  BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type Post = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export type BulletedListBlockObjectResponse = {
  id: string;
  type: "bulleted_list";
  bulleted_list: {
    children: Array<BulletedListItemBlockObjectResponse>;
  };
};

export type NumberedListBlockObjectResponse = {
  id: string;
  type: "numbered_list";
  numbered_list: {
    children: Array<NumberedListItemBlockObjectResponse>;
  };
};

export type ExpandedBlockObjectResponse =
  | ({
      children?: ExpandedBlockObjectResponse[];
    } & BlockObjectResponse)
  | BulletedListBlockObjectResponse
  | NumberedListBlockObjectResponse;

export type BlockWithChildren<P = unknown> = P & {
  children?: ExpandedBlockObjectResponse[];
};

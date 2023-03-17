import type {
  BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  ToDoBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type Post = {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  image: string;
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

export type ToDoListBlockObjectResponse = {
  id: string;
  type: "to_do_list";
  to_do_list: {
    children: Array<ToDoBlockObjectResponse>;
  };
};

export type ExpandedBlockObjectResponse =
  | ({
      children?: ExpandedBlockObjectResponse[];
    } & BlockObjectResponse)
  | BulletedListBlockObjectResponse
  | NumberedListBlockObjectResponse
  | ToDoListBlockObjectResponse;

export type BlockWithChildren<P = unknown> = P & {
  children?: ExpandedBlockObjectResponse[];
};

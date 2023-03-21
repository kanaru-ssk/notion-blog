import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "@/components/Head";
import NotionBlock from "@/components/NotionBlock";
import {
  notion,
  getBlocks,
  notionResponseToPost,
  getAllPosts,
} from "@/libs/notion";
import { ExpandedBlockObjectResponse, Post } from "@/types/notion";

type Props = {
  post: Post;
  blocks: ExpandedBlockObjectResponse[];
};

const PostPage: NextPage<Props> = ({ post, blocks }) => {
  return (
    <>
      <Head
        title={post.title}
        description={post.description}
        image={post.image}
        path={post.slug}
      />
      <div className="bg-gray-200">
        <div className="mx-auto max-w-3xl md:py-20 md:px-4">
          <article className="bg-white px-4 py-12 md:px-12">
            {blocks.map((block) => (
              <NotionBlock block={block} key={block.id} />
            ))}
          </article>
        </div>
      </div>
    </>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params?.slug)
    return {
      notFound: true,
    };

  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE,
    filter: {
      and: [
        {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
        {
          property: "Slug",
          rich_text: {
            equals:
              typeof params.slug === "string" ? params.slug : params.slug[0],
          },
        },
      ],
    },
  });
  const posts = res.results
    .map(notionResponseToPost)
    .filter((v): v is Post => Boolean(v));
  if (posts.length === 0)
    return {
      notFound: true,
    };
  const post = posts[0];
  const blocks = await getBlocks({ block_id: post.id, page_size: 100 });

  return {
    props: {
      post,
      blocks,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post) => {
    return { params: { slug: post.slug } };
  });
  return { paths, fallback: false };
};

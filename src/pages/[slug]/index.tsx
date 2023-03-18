import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { notFound } from "next/navigation";
import NotionBlock from "@/components/NotionBlock";
import { getBlocks } from "@/libs/notion/getBlocks";
import { getDatabase } from "@/libs/notion/getDatabase";
import { ExpandedBlockObjectResponse, Post } from "@/types/notion";
import { defaultMetadata } from "@/constants/defaultMetadata";

type Props = {
  post: Post;
  blocks: ExpandedBlockObjectResponse[];
};

const PostPage: NextPage<Props> = ({ post, blocks }) => {
  return (
    <>
      <Head>
        <meta
          property="og:url"
          content={`${defaultMetadata.url}/${post.slug}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={post.image} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="description" content={post.description} />
      </Head>
      <div className="mx-auto max-w-3xl md:py-20 md:px-4">
        <article className="mx-auto max-w-3xl bg-white px-4 py-12 md:rounded-xl md:px-12">
          {blocks.map((block) => (
            <NotionBlock block={block} key={block.id} />
          ))}
        </article>
      </div>
    </>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const posts = await getDatabase({
    database_id: process.env.NOTION_DATABASE,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
  });
  const post = posts.find((post) => post.slug === params?.slug);
  if (!post) return notFound();
  const blocks = await getBlocks({ block_id: post.id, page_size: 100 });

  return {
    props: {
      post,
      blocks,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getDatabase({
    database_id: process.env.NOTION_DATABASE,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
  });
  const paths = posts.map((post) => {
    return `/${post.slug}`;
  });
  return { paths, fallback: false };
};

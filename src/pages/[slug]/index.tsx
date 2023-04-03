import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { FooterNav } from "@/components/FooterNav";
import { Head } from "@/components/Head";
import { NotionBlock } from "@/components/NotionBlock";
import { getAllBlocks, getAllPosts } from "@/libs/notion";
import type { ExpandedBlockObjectResponse, Post } from "@/types/notion";

type Props = {
  post: Post;
  prevPost: Post | null;
  nextPost: Post | null;
  blocks: ExpandedBlockObjectResponse[];
};

const PostPage: NextPage<Props> = ({ post, prevPost, nextPost, blocks }) => {
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
          <article className="rounded-md bg-white px-4 py-12 md:px-12">
            {blocks.map((block) => (
              <NotionBlock block={block} key={block.id} />
            ))}
            <div className="mt-20">
              <FooterNav prevPost={prevPost} nextPost={nextPost} />
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params || typeof params.slug !== "string") return { notFound: true };

  const allPosts = await getAllPosts();
  const targetPostIndex = allPosts.findIndex((v) => v.slug === params.slug);
  if (targetPostIndex === -1) return { notFound: true };

  const post = allPosts[targetPostIndex];
  const prevPost =
    targetPostIndex + 1 < allPosts.length
      ? allPosts[targetPostIndex + 1]
      : null;
  const nextPost =
    0 <= targetPostIndex - 1 ? allPosts[targetPostIndex - 1] : null;

  const blocks = await getAllBlocks(post.id);
  return {
    props: {
      post,
      prevPost,
      nextPost,
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

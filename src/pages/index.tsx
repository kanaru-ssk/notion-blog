import type { NextPage, GetStaticProps } from "next";
import Head from "@/components/Head";
import PostCard from "@/components/PostCard";
import { getDatabase } from "@/libs/notion/getDatabase";
import { Post } from "@/types/notion";

type Props = {
  posts: Post[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Head />
      <div className="mx-auto max-w-3xl py-20 px-4">
        <ul>
          {posts.map((post) => {
            return <PostCard post={post} key={post.id} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getDatabase({
    database_id: process.env.NOTION_DATABASE,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });
  return {
    props: {
      posts,
    },
  };
};

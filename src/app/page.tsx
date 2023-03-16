import PostCard from "@/components/PostCard";
import { getDatabase } from "@/libs/notion";

export const metadata = {
  title: "notion-blog",
  description: "created by notion api and next js",
};

const Home = async () => {
  const posts = await getDatabase({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE,
    sorts: [
      {
        timestamp: "created_time",
        direction: "descending",
      },
    ],
  });

  return (
    <div className="mx-auto max-w-3xl py-20 px-4">
      {posts.map((post) => {
        return <PostCard post={post} key={post.id} />;
      })}
    </div>
  );
};

export default Home;

import Link from "next/link";

const NotFound = () => (
  <div className="mx-auto max-w-2xl">
    <main className="p-4 ">
      <h1 className="text-2xl">404</h1>
      <div className="my-4 leading-6">
        <p>お探しのページは見つかりませんでした。</p>
        <br />
        <p>
          一時的にアクセスできない状況にあるか、移動もしくは削除された可能性があります。
        </p>
        <br />
        <p>
          <Link href="/" className="font-medium text-blue-600 hover:underline">
            トップページへ戻る
          </Link>
        </p>
      </div>
    </main>
  </div>
);

export default NotFound;

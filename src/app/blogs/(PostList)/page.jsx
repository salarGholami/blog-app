import { cookies } from "next/headers";
import PostList from "../_components/PostList";
import setCookieOnRequest from "@/utils/setCookieOnRequest";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";

async function BlogsPage({ searchParams }) {
  const queries = queryString.stringify(searchParams);
  const cookieStore = cookies();
  const options = setCookieOnRequest(cookieStore);
  const posts = await getPosts(queries, options);

  const { search } = searchParams;

  return (
    <>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "هیچ پستی با این مشخصات پیدا نشد"
            : `نشان دادن ${posts.length} نتیجه برای`}
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      ) : null}
      <PostList posts={posts} />
    </>
  );
}

export default BlogsPage;

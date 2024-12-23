import PostList from "@/app/blogs/_components/PostList";
import { getPosts } from "@/services/postServices";
import setCookieOnRequest from "@/utils/setCookieOnRequest";
import { cookies } from "next/headers";
import queryString from "query-string";

async function Category({ params, searchParams }) {
  const { categorySlug } = params;

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/post/list?categorySlug=${categorySlug}&${queries}`
  // );

  const queries =
    queryString.stringify(searchParams) + "&" + `categorySlug=${categorySlug}`; //search , sort , ... +
  const cookieStore = cookies();
  const options = setCookieOnRequest(cookieStore);
  const posts = await getPosts(queries, options);

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg text-secondary-600">
          پستی در این دسته بندی پیدا نشد !
        </p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}

export default Category;

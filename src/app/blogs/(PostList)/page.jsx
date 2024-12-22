import { cookies } from "next/headers";
import PostList from "../_components/PostList";
import setCookieOnRequest from "@/utils/setCookieOnRequest";
import { getPosts } from "@/services/postServices";

async function BlogsPage() {
  const cookieStore = cookies();
  const options = setCookieOnRequest(cookieStore);
  const posts = await getPosts(options);
  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
}

export default BlogsPage;

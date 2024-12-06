async function PostList() {
  await new Promise((res) => setTimeout(() => res(), 2000));
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();

  return posts.length > 0 ? posts.map((post) => <div>{post.title}</div>) : null;
}

export default PostList;

import Image from "next/image";

async function PostList() {
  await new Promise((res) => setTimeout(() => res(), 2000));
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();

  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post) => (
        <div className="col-span-1 sm:col-span-6 lg:col-span-4 border border-secondary-300 p-2 rounded-lg ">
          <div className="relative aspect-2 overflow-hidden rounded-md">
            <Image
              src={post.coverImageUrl}
              alt={post.title}
              fill
              className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out "
              qulity={80}
            />
          </div>
        </div>
      ))}
    </div>
  ) : null;
}

export default PostList;

import Link from "next/link";

async function CategoryList() {
  await new Promise((res) => setTimeout(() => res(), 2500));

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();

  return (
    <ul className="space-y-4">
      <Link href={`/blogs`}>همه</Link>
      {categories.map((cattegory) => {
        return (
          <li key={cattegory._id}>
            <Link href={`/blogs/category/${cattegory.slug}`}>
              {cattegory.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default CategoryList;

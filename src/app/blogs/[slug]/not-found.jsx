import Link from "next/link";

function NotFound() {
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <p className="text-xl font-bold text-red-700 mb-8">
              هیچ پستی با این مشخصات پیدا نشد
            </p>
            <Link href={`/blogs`} className="text-secondary-700">
              رفتن به صفحه پست ؟
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;

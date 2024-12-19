export default function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;

  if (pathname.startWith("/profile")) {
    //set cookies => refresh , access =>
    //get user => user ...
  }
}

export const config = {
  matcher: ["/profile/path:*"],
};

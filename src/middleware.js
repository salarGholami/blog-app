<<<<<<< HEAD
import { NextResponse } from "next/server";
import { middlewareAuth } from "./utils/middlewareAuth";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/signin") || pathname.startsWith("/signup")) {
    const user = await middlewareAuth(req);
    if (user) return NextResponse.redirect(new URL(`/`, req.nextUrl));
  }

  if (pathname.startsWith("/profile")) {
    const user = await middlewareAuth(req);
    if (!user) return NextResponse.redirect(new URL(`/signin`, req.nextUrl));
=======
export default function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;

  if (pathname.startWith("/profile")) {
    //set cookies => refresh , access =>
    //get user => user ...
>>>>>>> 59f360906045a241044f5007bb4071bd023458e0
  }
}

export const config = {
<<<<<<< HEAD
  matcher: ["/profile/:path*", "/signin", "/signup"],
=======
  matcher: ["/profile/path:*"],
>>>>>>> 59f360906045a241044f5007bb4071bd023458e0
};

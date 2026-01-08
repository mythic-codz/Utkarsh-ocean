import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const blocked = request.cookies.get("devtool_blocked");

  // Allow blank page always
  if (request.nextUrl.pathname === "/blank") {
    return NextResponse.next();
  }

  // If blocked → redirect
  if (blocked?.value === "true") {
    const url = request.nextUrl.clone();
    url.pathname = "/blank";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Apply to all routes
export const config = {
  matcher: "/:path*",
};

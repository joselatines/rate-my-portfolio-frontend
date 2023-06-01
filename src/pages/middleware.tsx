import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	console.log("🚀💂 middleware");
	const cookies = true;
	if (!cookies) NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: "/dashboard/:path*",
};

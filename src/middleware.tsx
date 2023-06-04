import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
	console.log("🚀💂 middleware");
	const TOKEN_NAME = process.env.COOKIE_TOKEN_NAME;

	if (!TOKEN_NAME) {
		return NextResponse.redirect(new URL("auth/login", request.url));
	}
	const jwt = await request.cookies.get(TOKEN_NAME)?.value;

	console.log({ jwt, TOKEN_NAME });
	if (!jwt) return NextResponse.redirect(new URL("/auth/login", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: "/dashboard/:path*",
};

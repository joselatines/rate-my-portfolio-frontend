import { NextResponse } from "next/server";

import { jwtVerify } from "jose";

export async function middleware(request) {
	console.log("🚀💂 middleware");
	const { NEXT_PUBLIC_COOKIE_TOKEN_NAME } = process.env;

	if (!NEXT_PUBLIC_COOKIE_TOKEN_NAME) {
		return NextResponse.redirect(new URL("auth/login", request.url));
	}
	const jwt = await request.cookies.get(NEXT_PUBLIC_COOKIE_TOKEN_NAME)?.value;

	if (!jwt) return NextResponse.redirect(new URL("/auth/login", request.url));
}

export const config = {
	matcher: "/dashboard/:path*",
};

import { NextResponse } from "next/server";

import { jwtVerify } from "jose";

export async function middleware(request) {
	console.log("🚀💂 middleware");

	const jwt = await request.cookies.get("access_token")?.value;

	if (!jwt) return NextResponse.redirect(new URL("/auth/login", request.url));
}

export const config = {
	matcher: "/dashboard/:path*",
};

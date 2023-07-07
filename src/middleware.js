import { NextResponse } from "next/server";

export async function middleware(request) {
	console.info("🚀💂 middleware");

	const jwt = await request.cookies.get("access_token")?.value;

	if (!jwt) return NextResponse.redirect(new URL("/auth/login", request.url));
}

export const config = {
	matcher: "/dashboard/:path*",
};

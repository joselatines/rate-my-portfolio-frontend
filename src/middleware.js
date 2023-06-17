import { NextResponse } from "next/server";

import { jwtVerify } from "jose";

export async function middleware(request) {
	console.log("🚀💂 middleware");
	const { NEXT_PUBLIC_COOKIE_TOKEN_NAME, NEXT_PUBLIC_JWT_SECRET } = process.env;

	if (!NEXT_PUBLIC_COOKIE_TOKEN_NAME) {
		return NextResponse.redirect(new URL("/auth/login", request.url));
	}

	const jwt = await request.cookies.get(NEXT_PUBLIC_COOKIE_TOKEN_NAME)?.value;

	if (!jwt) {
		return NextResponse.redirect(new URL("/auth/login", request.url));
	}

	try {
		if (typeof jwtVerify === "function") {
			// Verify the JWT here
			const decodedToken = jwtVerify(jwt, NEXT_PUBLIC_JWT_SECRET);
			// If the token is valid, redirect to "/portfolios"
			return NextResponse.redirect(new URL("/portfolios", request.url));
		} else {
			console.error("🔥: jwtVerify is not available");
		}
	} catch (error) {
		console.error("🔥: ", error);
	}

	// Call the next middleware/handler in the chain
	return next(request);
}

export const config = {
	matcher: "/dashboard/:path*",
};

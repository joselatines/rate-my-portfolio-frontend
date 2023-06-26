/** @type {import('next').NextConfig} */

const { NEXT_PUBLIC_HOSTNAME, NEXT_PUBLIC_PORT } = process.env;
const isDev = process.env.NODE_ENV === "development";
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: isDev ? "http" : "https",
				hostname: isDev ? "localhost" : NEXT_PUBLIC_HOSTNAME,
				port: NEXT_PUBLIC_PORT || "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;

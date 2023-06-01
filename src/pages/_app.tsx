import MainLayouts from "@/layouts/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Toaster />
			<MainLayouts>
				<Component {...pageProps} />
			</MainLayouts>
		</>
	);
}

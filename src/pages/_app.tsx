import { UserProvider } from "@/context/user";
import MainLayouts from "@/layouts/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<>
				<Toaster />
				<MainLayouts>
					<Component {...pageProps} />
				</MainLayouts>
			</>
		</UserProvider>
	);
}

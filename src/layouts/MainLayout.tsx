import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "react-hot-toast";

type IProps = {
	children: JSX.Element;
};
function MainLayout({ children }: IProps) {
	return (
		<>
			<Toaster />
			<Navbar />
			<main className="py-6 px-8">{children}</main>
			{/* 	<Footer /> */}
		</>
	);
}

export default MainLayout;

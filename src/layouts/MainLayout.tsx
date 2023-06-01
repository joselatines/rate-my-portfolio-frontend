import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "react-hot-toast";

type IProps = {
	children: JSX.Element;
};
function MainLayout({ children }: IProps) {
	return (
		<main>
			<Toaster />
			<Navbar />
			{children}
			<Footer />
		</main>
	);
}

export default MainLayout;

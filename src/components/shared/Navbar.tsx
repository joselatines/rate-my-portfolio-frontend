import { login } from "@/services/auth";
import NextLink from "next/link";

function Navbar() {
	const handleLogin = async () => {
		const data = await login({ email: "jose", password: "" });
	};
	return (
		<nav className="shadow bg-white">
			<div className="h-16 mx-auto px-5 flex items-center justify-between">
				<a className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">
					Logo
				</a>

				<ul className="flex items-center gap-5">
					<li className="hover:text-cyan-500 transition-colors">
						<NextLink href="/portfolios">Portfolios</NextLink>
					</li>
					<li className="hover:text-cyan-500 transition-colors">
						<NextLink href="/dashboard">dashboard</NextLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;

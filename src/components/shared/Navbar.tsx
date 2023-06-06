import NextLink from "next/link";
import SessionManager from "./SessionManager";
// fix render
function Navbar() {
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

					<SessionManager />
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;

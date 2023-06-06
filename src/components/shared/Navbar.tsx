import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { logout } from "@/services/auth";
import { toastCheckApiResponse } from "@/utils/toast-check-api-response";
import Cookies from "js-cookie";

const tokenCookie = "access_token";
const userCookie = "user";
function Navbar() {
	const router = useRouter();
	const [refresh, setRefresh] = useState(0);

	const handleLogout = async () => {
		const res = await logout();
		if (toastCheckApiResponse(res)) {
			router.push("/");
			Cookies.remove(tokenCookie);
			Cookies.remove(userCookie);
			setRefresh(prev => prev + 1);
		}
	};

	const cookiesExits = Cookies.get(tokenCookie) && Cookies.get(userCookie);
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
					{cookiesExits ? (
						<div className="flex items-center gap-5">
							<li>
								<NextLink href="/dashboard">dashboard</NextLink>
							</li>
							<li
								onClick={handleLogout}
								className="hover:text-cyan-500 transition-colors"
							>
								logout
							</li>
						</div>
					) : (
						<div className="flex items-center gap-5">
							<li className="hover:text-cyan-500 transition-colors">
								<NextLink href="/auth/sign-up">Sign up</NextLink>
							</li>
							<li>
								<NextLink href="/auth/login">Login</NextLink>
							</li>
						</div>
					)}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;

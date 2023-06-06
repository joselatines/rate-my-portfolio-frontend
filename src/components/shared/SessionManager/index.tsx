import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import { logout } from "@/services/auth";
import { toastCheckApiResponse } from "@/utils/toast-check-api-response";

const tokenCookie = "access_token";
const userCookie = "user";

function SessionManager() {
	const router = useRouter();
	const [refresh, setRefresh] = useState(0);

	useEffect(() => {}, [refresh]);

	const handleLogout = async () => {
		const res = await logout();
		if (toastCheckApiResponse(res)) {
			router.push("/");
			Cookies.remove(tokenCookie);
			Cookies.remove(userCookie);
			setRefresh(prev => prev + 1);
		}
	};

	useEffect(() => {}, [refresh]);

	const cookiesExits = Cookies.get(tokenCookie) && Cookies.get(userCookie);

	return (
		<div>
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
		</div>
	);
}

export default SessionManager;

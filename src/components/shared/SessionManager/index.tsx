import NextLink from "next/link";
import { logout } from "@/services/auth";
import { toastCheckApiResponse } from "@/utils/toast-check-api-response";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const cookie = "access_token";

function SessionManager() {
	const router = useRouter();
	const handleLogout = async () => {
		const res = await logout();
		if (toastCheckApiResponse(res)) router.push("/");
	};

	const tokenCookie = Cookies.get(cookie);

	return (
		<>
			{tokenCookie ? (
				<>
					<li className="hover:text-cyan-500 transition-colors">
						<NextLink href="/auth/sign-up">Sign up</NextLink>
					</li>
					<li>
						<NextLink href="/auth/login">Login</NextLink>
					</li>
				</>
			) : (
				<li
					onClick={handleLogout}
					className="hover:text-cyan-500 transition-colors"
				>
					logout
				</li>
			)}
		</>
	);
}

export default SessionManager;

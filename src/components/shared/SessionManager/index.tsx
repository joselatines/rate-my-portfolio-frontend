import NextLink from "next/link";

function SessionManager() {
	return (
		<>
			<li className="hover:text-cyan-500 transition-colors">
				<NextLink href="/auth/sign-up">Sign up</NextLink>
			</li>
			<li>
				<NextLink href="/auth/login">Login</NextLink>
			</li>
		</>
	);
}

export default SessionManager;

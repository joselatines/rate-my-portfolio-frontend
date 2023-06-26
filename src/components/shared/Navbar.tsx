import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { BiLogOut } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import Cookies from "js-cookie";

import { logout as apiLogout } from "@/services/auth";
import { toastCheckApiResponse } from "@/utils/toast-check-api-response";
import dynamic from "next/dynamic";
import { useContextUser } from "@/hooks/useContextUser";
import Image from "next/image";
import { toast } from "react-hot-toast";

const tokenCookie = "access_token";
const userCookie = "user";
const DynamicNextLink = dynamic(() => import("next/link"));

function Navbar() {
	const router = useRouter();
	const { isLogged, logout, login } = useContextUser();

	const handleLogout = async () => {
		try {
			const res = await apiLogout();
			router.push("/");
			Cookies.remove("access_token");
			logout();
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong");
		}
	};

	useEffect(() => {
		if (Cookies.get(tokenCookie) && Cookies.get(userCookie)) return login();
	}, [isLogged]);

	return (
		<nav className="shadow  bg-white h-16 mx-auto px-5 flex items-center justify-center flex-wrap md:justify-between">
			<DynamicNextLink
				className="text-2xl font-extrabold cursor-pointer"
				href="/"
			>
				Rate my portfolio 🚀
			</DynamicNextLink>

			<ul className="flex items-center gap-10">
				<li className="hover:text-cyan-500 transition-colors">
					<DynamicNextLink href="/portfolios">Portfolios</DynamicNextLink>
				</li>
				{isLogged ? (
					<>
						<li>
							<DynamicNextLink href="/dashboard">Dashboard</DynamicNextLink>
						</li>
						<li
							onClick={handleLogout}
							className="hover:text-cyan-500 transition-colors flex items-center cursor-pointer gap-1"
						>
							Logout
							<BiLogOut />
						</li>
					</>
				) : (
					<>
						<li className="hover:text-cyan-500 transition-colors ">
							<DynamicNextLink
								href="/auth/sign-up"
								className="flex items-center cursor-pointer gap-1"
							>
								Sign up
							</DynamicNextLink>
						</li>
						<li className="hover:text-cyan-500 transition-colors flex items-center cursor-pointer gap-1">
							<DynamicNextLink
								href="/auth/login"
								className="flex items-center cursor-pointer gap-1"
							>
								Login
							</DynamicNextLink>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}

export default Navbar;

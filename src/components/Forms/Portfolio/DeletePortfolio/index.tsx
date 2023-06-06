import { deletePortfolio } from "@/services/portfolios";
import { toastCheckApiResponse } from "@/utils/toast-check-api-response";
import { useRouter } from "next/router";
import React from "react";

function DeletePortfolio({ id }: { id: string }) {
	const router = useRouter();

	const handleClick = async () => {
		const res = await deletePortfolio(id);
		if (toastCheckApiResponse(res)) router.push("/dashboard");
	};
	return (
		<button className="btn danger" onClick={handleClick}>
			DeletePortfolio
		</button>
	);
}

export default DeletePortfolio;

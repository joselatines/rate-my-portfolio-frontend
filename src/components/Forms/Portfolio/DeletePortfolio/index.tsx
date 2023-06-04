import { deletePortfolio } from "@/services/portfolios";
import { toastCheckApiResponse } from "@/utils/toast-check-api-response";
import React from "react";

function DeletePortfolio({ id }: { id: string }) {
	const handleClick = async () => {
		const res = await deletePortfolio(id);
		toastCheckApiResponse(res);
	};
	return (
		<button className="btn danger" onClick={handleClick}>
			DeletePortfolio
		</button>
	);
}

export default DeletePortfolio;

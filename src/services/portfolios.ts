import BadRequestError from "@/errors/bad-request";
import { errorApiReqHandler } from "@/errors/error-api-req-handler";
import { Portfolio } from "@/shared/interfaces/portfolio.interface";
import axios from "axios";

type GetPortfolios = () => Promise<Portfolio[]>;
const NEXT_PUBLIC_API_URI = process.env.NEXT_PUBLIC_API_URI;

export const getAllPortfolios: GetPortfolios = async () => {
	try {
		const res = await axios.get(`${NEXT_PUBLIC_API_URI}/portfolios`);

		return res.data.data;
	} catch (err) {
		return errorApiReqHandler(err);
	}
};

export const newPortfolio = async (portfolio: Portfolio) => {
	const options = {
		method: "POST",
		url: `${NEXT_PUBLIC_API_URI}/portfolios`,
		withCredentials: true,
		headers: {
			"Content-Type": "application/json",
		},
		data: portfolio,
	};

	try {
		const res = await axios.request(options);

		return res.data;
	} catch (err) {
		return errorApiReqHandler(err);
	}
};

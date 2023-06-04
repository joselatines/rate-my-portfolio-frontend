import { errorApiReqHandler } from "@/errors/error-api-req-handler";
import {
	CreatePortfolio,
	EditPortfolio,
	Portfolio,
} from "@/shared/interfaces/portfolio.interface";
import { objectToFormData } from "@/utils/object-to-formData";
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

export const newPortfolio = async (portfolio: CreatePortfolio) => {
	const form = objectToFormData(portfolio);
	const options = {
		method: "POST",
		url: `${NEXT_PUBLIC_API_URI}/portfolios`,
		withCredentials: true,
		headers: {
			"Content-Type": `multipart/form-data;`,
		},
		data: form,
	};

	try {
		const res = await axios.request(options);

		return res.data;
	} catch (err) {
		return errorApiReqHandler(err);
	}
};

export const editPortfolio = async (portfolio: EditPortfolio, id: string) => {
	const form = objectToFormData(portfolio);
	const options = {
		method: "PUT",
		url: `${NEXT_PUBLIC_API_URI}/portfolios/${id}`,
		withCredentials: true,
		headers: {
			"Content-Type": `multipart/form-data;`,
		},
		data: form,
	};

	try {
		const res = await axios.request(options);

		return res.data;
	} catch (err) {
		return errorApiReqHandler(err);
	}
};

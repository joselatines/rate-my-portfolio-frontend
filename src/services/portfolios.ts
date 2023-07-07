import { errorApiReqHandler } from "@/errors/error-api-req-handler";
import {
	CreatePortfolio,
	EditPortfolio,
	IPortfolio,
	RatePortfolio,
} from "@/shared/interfaces/portfolio.interface";
import { serialize } from "object-to-formdata";
import axios from "axios";
import { IServiceResponse } from "./service-response.interface";

type GetPortfolios = () => Promise<IServiceResponse<IPortfolio[]>>;
type GetPortfolio = (id: string) => Promise<IServiceResponse<IPortfolio>>;

const NEXT_PUBLIC_API_URI = process.env.NEXT_PUBLIC_API_URI;

export const getOnePortfolio: GetPortfolio = async (id: string) => {
	const options = {
		method: "GET",
		url: `${NEXT_PUBLIC_API_URI}/portfolios/${id}`,
		withCredentials: true,
	};

	try {
		const res = await axios.request(options);

		return res.data;
	} catch (err) {
		return errorApiReqHandler(err);
	}
};

export const getAllPortfolios: GetPortfolios = async () => {
	const options = {
		method: "GET",
		url: `${NEXT_PUBLIC_API_URI}/portfolios`,
		withCredentials: true,
	};

	try {
		const res = await axios.request(options);
		return res.data;
	} catch (err) {
		return errorApiReqHandler(err);
	}
};

export const getAllPortfoliosFromUser: GetPortfolios = async () => {
	const options = {
		method: "GET",
		url: `${NEXT_PUBLIC_API_URI}/portfolios/user`,
		withCredentials: true,
	};
	try {
		const res = await axios.request(options);

		return res.data;
	} catch (err) {
		return errorApiReqHandler(err);
	}
};

export const newPortfolio = async (portfolio: CreatePortfolio) => {
	const form = serialize({
		...portfolio,
		technologies: portfolio.technologies.join(","),
	});

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
	const form = serialize(portfolio);

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

export const ratePortfolio = async (
	portfolioId: string,
	rate_to: string, // user to be rated
	rateOptions: RatePortfolio
) => {
	const options = {
		method: "POST",
		withCredentials: true,
		url: `${NEXT_PUBLIC_API_URI}/portfolios/${portfolioId}/rate/${rate_to}`,
		data: rateOptions,
	};

	try {
		const res = await axios.request(options);
		return res.data;
	} catch (err) {
		return errorApiReqHandler(err);
	}
};

export const deletePortfolio = async (id: string) => {
	const options = {
		method: "DELETE",
		withCredentials: true,
		url: `${NEXT_PUBLIC_API_URI}/portfolios/${id}`,
	};

	try {
		const res = await axios.request(options);
		return res.data;
	} catch (err) {
		return errorApiReqHandler(err);
	}
};

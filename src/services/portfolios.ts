import { errorApiReqHandler } from "@/errors/error-api-req-handler";
import {
	CreatePortfolio,
	EditPortfolio,
	Portfolio,
	RatePortfolio,
} from "@/shared/interfaces/portfolio.interface";
import { objectToFormData } from "@/utils/object-to-formData";
import { serialize } from "object-to-formdata";
import axios from "axios";

type GetPortfolios = () => Promise<Portfolio[]>;
type GetPortfolio = (id: string) => Promise<Portfolio>;

const NEXT_PUBLIC_API_URI = process.env.NEXT_PUBLIC_API_URI;

// Axios request interceptor to include cookies with each request
axios.interceptors.request.use(config => {
	config.withCredentials = true;
	return config;
});

export const getOnePortfolio: GetPortfolio = async (id: string) => {
	return {
		id: "527ed0e3-a5d3-4ec8-97dc-7423db775c36",
		title: "dfsf",
		description: null,
		current_votes: 1,
		current_rate_avg: 7,
		thumbnail_path: "/images/1687772485602-thumbnail.webp",
		technologies: ["react", " framer motion"],
		live: "https://www.joselatines.com/",
		createdAt: "2023-06-26T09:41:25.705Z",
		updatedAt: "2023-06-26T09:59:35.800Z",
		createdBy: "a1aaf062-cc52-406d-8d86-2e8b4b9e6172",
		author: {
			id: "a1aaf062-cc52-406d-8d86-2e8b4b9e6172",
			username: "jhon69",
			email: "jonhdoe@gmail.com",
			github: null,
		},
	};

	try {
		const res = await axios.get(`${NEXT_PUBLIC_API_URI}/portfolios/${id}`);
		return res.data.data;
	} catch (err) {
		return errorApiReqHandler(err);
	}
};

export const getAllPortfolios: GetPortfolios = async () => {
	return [
		{
			id: "527ed0e3-a5d3-4ec8-97dc-7423db775c36",
			title: "dfsf",
			description: null,
			current_votes: 1,
			current_rate_avg: 7,
			thumbnail_path: "/images/1687772485602-thumbnail.webp",
			technologies: ["react", " framer motion"],
			live: "https://www.joselatines.com/",
			createdAt: "2023-06-26T09:41:25.705Z",
			updatedAt: "2023-06-26T09:59:35.800Z",
			createdBy: "a1aaf062-cc52-406d-8d86-2e8b4b9e6172",
			author: {
				id: "a1aaf062-cc52-406d-8d86-2e8b4b9e6172",
				username: "jhon69",
				email: "jonhdoe@gmail.com",
				github: null,
			},
		},
		{
			id: "04a23a7c-74cd-4ced-8552-881f4d0312cf",
			title: "dffdf",
			description: "df",
			current_votes: 1,
			current_rate_avg: 6,
			thumbnail_path: "/images/1687773731256-1539276805401.jpg",
			technologies: ["react"],
			live: "https://sequelize.org/docs/v6/core-concepts/model-querying-finders/",
			createdAt: "2023-06-26T10:02:11.333Z",
			updatedAt: "2023-06-26T10:06:28.699Z",
			createdBy: "d9cc51ce-7115-4029-b371-e1d38ff89c39",
			author: {
				id: "d9cc51ce-7115-4029-b371-e1d38ff89c39",
				username: "pablito",
				email: "joselatines33@gmail.com",
				github: null,
			},
		},
		{
			id: "91c652be-ca2e-4896-887b-7f1178b6d556",
			title:
				"Estrategias de enseñanza del idioma inglés utilizando la producción oral",
			description: "fx",
			current_votes: 0,
			current_rate_avg: 0,
			thumbnail_path: "/images/1687779000908-1539276805401.jpg",
			technologies: ["javascript"],
			live: "https://sequelize.org/docs/v6/core-concepts/model-querying-finders/",
			createdAt: "2023-06-26T11:30:00.924Z",
			updatedAt: "2023-06-26T11:30:00.924Z",
			createdBy: "d9cc51ce-7115-4029-b371-e1d38ff89c39",
			author: {
				id: "d9cc51ce-7115-4029-b371-e1d38ff89c39",
				username: "pablito",
				email: "joselatines33@gmail.com",
				github: null,
			},
		},
	];

	try {
		const res = await axios.get(`${NEXT_PUBLIC_API_URI}/portfolios`);
		return res.data.data;
	} catch (err) {
		return errorApiReqHandler(err);
	}
};

export const getAllUserPortfolios: GetPortfolios = async () => {
	return [
		{
			id: "527ed0e3-a5d3-4ec8-97dc-7423db775c36",
			title: "dfsf",
			description: null,
			current_votes: 1,
			current_rate_avg: 7,
			thumbnail_path: "/images/1687772485602-thumbnail.webp",
			technologies: ["react", " framer motion"],
			live: "https://www.joselatines.com/",
			createdAt: "2023-06-26T09:41:25.705Z",
			updatedAt: "2023-06-26T09:59:35.800Z",
			createdBy: "a1aaf062-cc52-406d-8d86-2e8b4b9e6172",
			author: {
				id: "a1aaf062-cc52-406d-8d86-2e8b4b9e6172",
				username: "jhon69",
				email: "jonhdoe@gmail.com",
				github: null,
			},
		},
		{
			id: "04a23a7c-74cd-4ced-8552-881f4d0312cf",
			title: "dffdf",
			description: "df",
			current_votes: 1,
			current_rate_avg: 6,
			thumbnail_path: "/images/1687773731256-1539276805401.jpg",
			technologies: ["react"],
			live: "https://sequelize.org/docs/v6/core-concepts/model-querying-finders/",
			createdAt: "2023-06-26T10:02:11.333Z",
			updatedAt: "2023-06-26T10:06:28.699Z",
			createdBy: "d9cc51ce-7115-4029-b371-e1d38ff89c39",
			author: {
				id: "d9cc51ce-7115-4029-b371-e1d38ff89c39",
				username: "pablito",
				email: "joselatines33@gmail.com",
				github: null,
			},
		},
		{
			id: "91c652be-ca2e-4896-887b-7f1178b6d556",
			title:
				"Estrategias de enseñanza del idioma inglés utilizando la producción oral",
			description: "fx",
			current_votes: 0,
			current_rate_avg: 0,
			thumbnail_path: "/images/1687779000908-1539276805401.jpg",
			technologies: ["javascript"],
			live: "https://sequelize.org/docs/v6/core-concepts/model-querying-finders/",
			createdAt: "2023-06-26T11:30:00.924Z",
			updatedAt: "2023-06-26T11:30:00.924Z",
			createdBy: "d9cc51ce-7115-4029-b371-e1d38ff89c39",
			author: {
				id: "d9cc51ce-7115-4029-b371-e1d38ff89c39",
				username: "pablito",
				email: "joselatines33@gmail.com",
				github: null,
			},
		},
	];

	try {
		const res = await axios.get(`${NEXT_PUBLIC_API_URI}/portfolios/all`);
		return res.data.data;
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
	rateOptions: RatePortfolio
) => {
	const options = {
		method: "POST",
		url: `${NEXT_PUBLIC_API_URI}/portfolios/${portfolioId}/rate`,
		data: rateOptions,
	};

	try {
		const res = await axios.request(options);
		return res.data;
	} catch (err) {
		return { error: "You need to login" };
	}
};

export const deletePortfolio = async (id: string) => {
	const options = {
		method: "DELETE",
		url: `${NEXT_PUBLIC_API_URI}/portfolios/${id}`,
	};

	try {
		const res = await axios.request(options);
		return res.data;
	} catch (err) {
		return errorApiReqHandler(err);
	}
};

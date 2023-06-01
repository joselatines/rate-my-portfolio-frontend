import { Portfolio } from "@/shared/interfaces/portfolio.interface";

type GetPortfolios = () => Promise<Portfolio[]>;
const { NEXT_PUBLIC_API_URI } = process.env;

const nextJsConfig = {
	cache: { cache: "no-store" },
	saveCache: {
		next: { revalidate: 86400 }, // revalidate in 24 hours
	},
};

export const getAllPortfolios: GetPortfolios = async () => {
	console.log(NEXT_PUBLIC_API_URI);

	try {
		const res = await fetch(`${NEXT_PUBLIC_API_URI}/portfolios`, {
			next: { revalidate: 100 },
		});

		const data = await res.json();
		return data.data;
	} catch (err) {
		console.log(err);
	}
};

export const newPortfolio = async (portfolio: Portfolio) => {
	// todo: see why is not loading env variable
	try {
		const res = await fetch(`${NEXT_PUBLIC_API_URI}/portfolios`, {
			method: "POST",
			body: JSON.stringify(portfolio),
		});

		const data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};

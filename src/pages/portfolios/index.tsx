import PortfoliosSection from "@/components/Portfolios/Section";
import { getAllPortfolios } from "@/services/portfolios";
import IPortfolio from "@/shared/interfaces/portfolio.interface";

type IProps = {
	portfolios: IPortfolio[];
};

export default function Portfolios({ portfolios }: IProps) {
	return (
		<main>
			<h1 className="text-6xl font-bold mb-3">Portfolios</h1>
			<PortfoliosSection portfoliosList={portfolios} />
		</main>
	);
}

export async function getStaticProps() {
	let { data, success } = await getAllPortfolios();
	
	const p = {
		message: "Get all items",
		success: true,
		data: [
			{
				id: "e38d0685-c19e-4cbc-9774-f4372b072dd6",
				title: "Sample Portfolio Title",
				description: "This is a sample portfolio",
				current_votes: 0,
				current_rate_avg: 0,
				thumbnail_path:
					"https://www.joselatines.com/images/projects/flexzin-ecommerce.webp",
				technologies: ["react, javascript"],
				live: "www.portfoliosample.com",
				createdAt: "2023-07-06T01:33:03.012Z",
				updatedAt: "2023-07-06T01:33:03.012Z",
				created_by: "42f119a0-faf5-45cf-b142-d83a440cd240",
			},
		],
	};

	if (!success) data = [];
	return {
		props: {
			portfolios: data,
		},
	};
}

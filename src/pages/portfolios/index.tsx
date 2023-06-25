import PortfoliosSection from "@/components/Portfolios/Section";
import { getAllPortfolios } from "@/services/portfolios";
import { Portfolio } from "@/shared/interfaces/portfolio.interface";

type IProps = {
	portfoliosList: Portfolio[];
};

export default function Portfolios({ portfoliosList }: IProps) {
	return (
		<main>
			<h1 className="text-6xl font-bold mb-3">Portfolios</h1>
			<PortfoliosSection portfoliosList={portfoliosList} />
		</main>
	);
}

export async function getStaticProps() {
	const portfoliosList = await getAllPortfolios();
	console.log(portfoliosList);
	console.log("portfoliosList");

	return {
		props: {
			portfoliosList,
		},
	};
}

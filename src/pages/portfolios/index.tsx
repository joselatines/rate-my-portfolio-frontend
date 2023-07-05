import PortfoliosSection from "@/components/Portfolios/Section";
import { getAllPortfolios } from "@/services/portfolios";
import { Portfolio } from "@/shared/interfaces/portfolio.interface";

type IProps = {
	portfolios: Portfolio[];
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
	const portfolios = await getAllPortfolios();

	return {
		props: {
			portfolios: portfolios.data || [],
		},
	};
}

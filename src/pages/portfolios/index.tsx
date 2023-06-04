import PortfoliosSection from "@/components/Portfolios/Section";
import { getAllPortfolios } from "@/services/portfolios";
import { Portfolio } from "@/shared/interfaces/portfolio.interface";

type IProps = {
	portfoliosList: Portfolio[];
};

export default function Portfolios({ portfoliosList }: IProps) {
	return (
		<main>
			<PortfoliosSection portfoliosList={portfoliosList} />
		</main>
	);
}

export async function getStaticProps() {
	const portfoliosList = await getAllPortfolios();
	console.log({ portfoliosList });
	return {
		props: {
			portfoliosList,
		},
	};
}

import PortfolioCard from "@/components/Portfolios/PortfolioCard";
import { IPortfolio } from "@/shared/interfaces/portfolio.interface";

type IProps = {
	portfoliosList:  Required<IPortfolio>[];
};

function PortfoliosSection({ portfoliosList }: IProps) {
	if (portfoliosList.length === 0) {
		return <h1 className="text-3xl font-bod">No portfolios uploaded yet</h1>;
	}

	return (
		<section className="flex flex-wrap my-3 gap-10">
			{portfoliosList.map(portfolio => (
				<PortfolioCard portfolio={portfolio} key={portfolio.id} />
			))}
		</section>
	);
}

export default PortfoliosSection;

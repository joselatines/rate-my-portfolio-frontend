import CreatePortfolioForm from "@/components/Forms/CreatePortfolioForm";
import PortfoliosSection from "@/components/Portfolios/Section";
import { getAllPortfolios } from "@/services/portfolios";
import { Portfolio } from "@/shared/interfaces/portfolio.interface";

type IProps = {
	portfoliosList: Portfolio[];
};

export default function Dashboard({ portfoliosList }: IProps) {
	return (
		<div>
			<span>Dashboard private</span>
			<CreatePortfolioForm />
			<PortfoliosSection portfoliosList={portfoliosList} />
		</div>
	);
}

export async function getStaticProps() {
	const portfoliosList = await getAllPortfolios();

	return {
		props: {
			portfoliosList,
		},
	};
}

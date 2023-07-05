import CreatePortfolioForm from "@/components/Forms/Portfolio/CreatePortfolioForm";
import PortfoliosSection from "@/components/Portfolios/Section";
import { getAllUserPortfolios } from "@/services/portfolios";
import { Portfolio } from "@/shared/interfaces/portfolio.interface";

type IProps = {
	portfoliosList: Portfolio[];
};

export default function Dashboard({ portfoliosList }: IProps) {
	return (
		<div>
			<h1 className="text-6xl font-bold mb-3">Dashboard</h1>
			<CreatePortfolioForm />
			<PortfoliosSection portfoliosList={portfoliosList} />
		</div>
	);
}

export async function getStaticProps() {
	const portfoliosList = await getAllUserPortfolios();

	return {
		props: {
			portfoliosList,
		},
	};
}

import CreatePortfolioForm from "@/components/Forms/CreatePortfolio";
import PortfoliosSection from "@/components/Portfolios/Section";
import { getAllPortfolios } from "@/services/portfolios";

async function Dashboard() {
	const portfoliosList = await getAllPortfolios();

	return (
		<div>
			<span>Dashboard private</span>
			<CreatePortfolioForm />
			<PortfoliosSection portfoliosList={portfoliosList} />
		</div>
	);
}

export default Dashboard;

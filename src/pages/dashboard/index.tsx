import CreatePortfolioForm from "@/components/Forms/Portfolio/CreatePortfolioForm";
import PortfoliosSection from "@/components/Portfolios/Section";
import { getAllPortfoliosFromUser } from "@/services/portfolios";
import { useEffect, useState } from "react";

export default function DashboardPage() {
	const [portfolios, setPortfolios] = useState<any>(null);
	const fetchData = async () => {
		const { success, data } = await getAllPortfoliosFromUser();
		if (success && data) {
			return setPortfolios(data);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<h1 className="text-6xl font-bold mb-3">Dashboard</h1>
			<CreatePortfolioForm />
			{portfolios && <PortfoliosSection portfoliosList={portfolios} />}
		</div>
	);
}

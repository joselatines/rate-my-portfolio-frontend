import CreatePortfolioForm from "@/components/Forms/Portfolio/CreatePortfolioForm";
import PortfoliosSection from "@/components/Portfolios/Section";
import { getAllPortfoliosFromUser } from "@/services/portfolios";
import { Portfolio } from "@/shared/interfaces/portfolio.interface";
import { useEffect, useState } from "react";

export default function DashboardPage() {
	const [portfolios, setPortfolios] = useState<Portfolio[] | any>([]);
	const fetchData = async () => {
		const res = await getAllPortfoliosFromUser();
		if (res.success) return setPortfolios(res.data);
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<h1 className="text-6xl font-bold mb-3">Dashboard</h1>
			<CreatePortfolioForm />
			<PortfoliosSection portfoliosList={portfolios} />
		</div>
	);
}

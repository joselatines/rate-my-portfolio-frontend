import CreatePortfolioForm from "@/components/Forms/Portfolio/CreatePortfolioForm";
import PortfoliosSection from "@/components/Portfolios/Section";
import { useFetch } from "@/hooks/useFetch";
import { getAllUserPortfolios } from "@/services/portfolios";
import { Portfolio } from "@/shared/interfaces/portfolio.interface";

type IProps = {
	portfoliosList: Portfolio[];
};

export default function Dashboard() {
	const NEXT_PUBLIC_API_URI = process.env.NEXT_PUBLIC_API_URI;

	const { data, loading, error } = useFetch(
		`${NEXT_PUBLIC_API_URI}/portfolios/all`
	);

	const showData = () => {
		if (loading) return <span>Loading...</span>;
		if (error) return <span>{error}</span>;
		
		return <PortfoliosSection portfoliosList={data} />;
	};

	return (
		<div>
			<span>Dashboard private</span>
			<CreatePortfolioForm />
			{showData()}
		</div>
	);
}

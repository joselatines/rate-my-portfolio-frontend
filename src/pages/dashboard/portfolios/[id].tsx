import EditPortfolioForm from "@/components/Forms/Portfolio/EditPortfolioForm";
import { getOnePortfolio } from "@/services/portfolios";
import IPortfolio from "@/shared/interfaces/portfolio.interface";
import { toastCheckApiResponse } from "@/utils/toast-check-api-response";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function SinglePortfolio() {
	const [portfolio, setPortfolio] = useState<IPortfolio | any>(null);
	const router = useRouter();
	const id = router.query.id;

	const fetchData = async (id: string) => {
		const res = await getOnePortfolio(id);
		if (res.success) {
			toastCheckApiResponse(res);
			return setPortfolio(res.data);
		}
	};
	useEffect(() => {
		if (id) fetchData(id[0]);
	}, []);

	if (portfolio) return <div>{id && <EditPortfolioForm id={id[0]} />}</div>;

	return <span>Portfolio doesn't exits</span>;
}

export default SinglePortfolio;

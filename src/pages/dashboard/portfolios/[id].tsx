import DeletePortfolio from "@/components/Forms/Portfolio/DeletePortfolio";
import EditPortfolioForm from "@/components/Forms/Portfolio/EditPortfolioForm";
import { useRouter } from "next/router";

function PortfolioId() {
	const router = useRouter();
	const id = router.query.id?.toString();

	const currentValues = {
		technologies: [],
		live: "string",
		title: "string",
		description: "string",
		thumbnail_path: { name: "//" },
		prevImage: "string",
	};

	if (!id) return <span>Sorry for that portfolio doesn't exits</span>;

	return (
		<div>
			PortfolioId {id}
			<DeletePortfolio id={id} />
			<EditPortfolioForm id={id} currentValues={currentValues} />
		</div>
	);
}

export default PortfolioId;

import PortfolioCard from "@/components/Portfolios/PortfolioCard";
import ModalPortfolioCard from "@/components/Portfolios/ModalPortfolioCard";
import SkeletonPortfolioCard from "@/components/Portfolios/PortfolioCard/SkeletonPortfolioCard";
import { Portfolio } from "@/shared/interfaces/portfolio.interface";
import { useState } from "react";

type IProps = {
	portfoliosList: Portfolio[];
};

function PortfoliosSection({ portfoliosList }: IProps) {
	const [modalOpen, setModalOpen] = useState(false);
	const [modalPortfolioData, setModalPortfolioData] = useState<Portfolio>({
		title: "",
		author: {
			name: "",
		},
		thumbnail_path: "",
		description: "",
		id: "",
		current_votes: 0,
		technologies: [{ name: "", icon: "" }],
		live: "/",
	});

	const handleOpenModal = (portfolioId: string) => {
		const portfolioFound = portfoliosList.filter(
			portfolio => portfolio.id === portfolioId
		)[0];

		setModalPortfolioData(portfolioFound);
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	if (portfoliosList.length === 0)
		return <h1 className="text-3xl font-bod">No portfolios uploaded yet</h1>;

	return (
		<>
			{modalOpen && (
				<ModalPortfolioCard
					closeModal={handleCloseModal}
					portfolio={modalPortfolioData}
				/>
			)}
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
				{portfoliosList
					? portfoliosList.map(
							({ live, title, author, description, thumbnail_path, id }) => (
								<PortfolioCard
									key={id}
									thumbnail_path={thumbnail_path}
									title={title}
									authorName={author.name}
									description={description}
									id={id}
									live={live}
									openModal={handleOpenModal}
								/>
							)
					  )
					: [1, 2, 3].map(n => <SkeletonPortfolioCard key={n} />)}
			</section>
		</>
	);
}

export default PortfoliosSection;

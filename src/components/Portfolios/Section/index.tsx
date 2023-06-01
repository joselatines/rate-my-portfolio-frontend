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
			social_media: [],
		},
		social_media: [{ name: "", url: "" }],
		images: [""],
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
							({ live, title, author, description, images, id }) => (
								<PortfolioCard
									key={title + author}
									images={images}
									title={title}
									authorName={author.name}
									description={description}
									id={id}
									live={live}
									openModal={handleOpenModal}
								/>
							)
					  )
					: [1, 2, 3].map(n => <SkeletonPortfolioCard />)}
			</section>
		</>
	);
}

export default PortfoliosSection;

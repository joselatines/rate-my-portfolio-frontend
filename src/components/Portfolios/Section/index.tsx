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
	const [modalPortfolioData, setModalPortfolioData] =
		useState<Portfolio | null>(null);

	const handleOpenModal = (portfolioId: string) => {
		const portfolioFound = portfoliosList.find(
			portfolio => portfolio.id === portfolioId
		);

		if (portfolioFound) {
			setModalPortfolioData(portfolioFound);
			setModalOpen(true);
		}
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};
	console.log({ portfoliosList });
	if (portfoliosList.length === 0) {
		return <h1 className="text-3xl font-bod">No portfolios uploaded yet</h1>;
	}

	return (
		<>
			{modalOpen && (
				<ModalPortfolioCard
					closeModal={handleCloseModal}
					portfolio={modalPortfolioData!}
				/>
			)}
			<section className="flex flex-wrap my-3 gap-10">
				{portfoliosList.length > 0
					? portfoliosList.map(
							({
								live,
								title,
								current_rate_avg,
								author,
								description,
								thumbnail_path,
								id,
								current_votes,
							}) => (
								<PortfolioCard
									key={id}
									thumbnail_path={thumbnail_path}
									title={title}
									authorName={author.name}
									description={description}
									id={id}
									live={live}
									currentRateAvg={current_rate_avg}
									currentVotes={current_votes}
									openModal={handleOpenModal}
								/>
							)
					  )
					: [1, 2, 3, 4, 5, 6].map(n => <SkeletonPortfolioCard key={n} />)}
			</section>
		</>
	);
}

export default PortfoliosSection;

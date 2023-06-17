import NextImage from "next/image";
import NextLink from "next/link";
import { AiFillCloseCircle, AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Portfolio } from "@/shared/interfaces/portfolio.interface";
import { parseImg } from "@/utils/parse-img";
import RateCard from "../PortfolioCard/RateCard";

type IProps = {
	portfolio: Portfolio;
	closeModal: () => any;
};

function ModalPortfolioCard({ closeModal, portfolio }: IProps) {

	const {
		thumbnail_path,
		title,
		description,
		current_votes,
		author,
		live,
		technologies,
		current_rate_avg,
		id,
	} = portfolio;

	return (
		<div
			className="relative z-10"
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true"
		>
			<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

			<div className="fixed inset-0 z-10 overflow-y-auto">
				<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-10">
					<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
						<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
							<button onClick={closeModal} type="button" className="btn danger">
								Close <AiFillCloseCircle size={20} />
							</button>
						</div>
						<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 grid grid-cols-1 md:grid-cols-3 gap-5">
							<section className="col-span-2">
								<div>
									<NextImage
										width={500}
										height={100}
										className="w-full max-h-[60vh] bg-cover mb-5"
										src={parseImg(thumbnail_path)}
										alt={title}
									/>
								</div>
								<div>{technologies.map(tech => tech)}</div>
							</section>
							<section className="min-w-full">
								<h2 className="text-5xl font-bold mb-3">{title}</h2>
								<p>{description}</p>

								<RateCard
									portfolioId={id}
									currentVotes={current_votes}
									currentRateAvg={current_rate_avg}
								/>
								<div className="mt-6 flex justify-end items-center gap-1">
									<NextLink href={live} target="_blank" className="btn">
										See live
										<HiOutlineExternalLink />
									</NextLink>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModalPortfolioCard;

import NextLink from "next/link";
import { AiFillCloseCircle, AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

import { Portfolio } from "@/shared/interfaces/portfolio.interface";

type IProps = {
	portfolio: Portfolio;
	closeModal: () => any;
};

function ModalPortfolioCard({ closeModal, portfolio }: IProps) {
	const {
		images,
		title,
		description,
		current_votes,
		author,
		live,
		technologies,
	} = portfolio;
	const { social_media } = author;

	const ICONS = { github: <AiFillGithub size={25} /> };
	return (
		<div
			className="relative z-10"
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true"
		>
			{/*   <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
			<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

			<div className="fixed inset-0 z-10 overflow-y-auto">
				<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-10">
					{/* <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      --> */}

					<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
						<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
							<button onClick={closeModal} type="button" className="btn">
								Close <AiFillCloseCircle size={20} />
							</button>
						</div>
						<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 grid grid-cols-1 md:grid-cols-3 gap-5">
							<section className="col-span-2">
								<div>
									<img
										/* width={200}
				height={100} */
										className="w-full max-h-[60vh] bg-cover mb-5"
										src={images[0]}
										alt={title}
									/>
								</div>
								<div>{technologies.map(tech => tech.name)}</div>
							</section>
							<section className="min-w-full">
								<h2 className="text-xl font-bold">{title}</h2>
								<p>{description}</p>
								<div>
									<span>Votes: {current_votes}</span>
									<span>Average: {current_votes / 2}</span>
								</div>
								<div className="mt-6 flex justify-end items-center gap-1">
									{social_media.map(({ name, url }) => (
										<NextLink target="_blank" href={url}>
											{ICONS[name]}
										</NextLink>
									))}
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

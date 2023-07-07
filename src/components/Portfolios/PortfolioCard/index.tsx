import NextLink from "next/link";
import NextImage from "next/image";
import { useRouter } from "next/router";
import { AiFillEdit } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import DeletePortfolio from "@/components/Forms/Portfolio/DeletePortfolio";
import RateCard from "./RateCard";
import { parseImg } from "@/utils/parse-img";
import IPortfolio from "@/shared/interfaces/portfolio.interface";
import GlassmorphismContainer from "@/components/Glassmorphism/GlassmorphismContainer";

type IProps = {
	portfolio: Required<IPortfolio> | any;
};

function PortfolioCard({ portfolio }: IProps) {
	const {
		title,
		description,
		thumbnail_path,
		current_rate_avg,
		current_votes,
		live,
		id,
	} = portfolio;
	const router = useRouter();
	const dashboardPath = "/dashboard";

	return (
		<div className="text-center md:text-left max-w-lg w-auto rounded overflow-hidden shadow-lg ">
			<NextImage
				width={350}
				height={200}
				className="object-cover w-full h-64"
				src={parseImg(thumbnail_path)}
				alt={title}
			/>
			<section className="py-6 px-8">
				<div>
					<div className="font-bold text-xl mb-2">{title}</div>
					<p className="text-gray-700 text-base">{description}</p>
					<span className="inline-block text-gray-500 text-sm font-semibold my-2">
						By: {"authorName"}
					</span>
				</div>
				<div className="flex items-center justify-center gap-2 flex-wrap md:justify-normal">
					<NextLink target="_blank" className="btn" href={live}>
						See live app <HiOutlineExternalLink />
					</NextLink>

					<RateCard
						portfolioId={id}
						currentVotes={current_votes}
						currentRateAvg={current_rate_avg}
					/>

					{router.pathname.includes(dashboardPath) && (
						<>
							<NextLink className="btn" href={`/dashboard/portfolios/${id}`}>
								Edit <AiFillEdit />
							</NextLink>

							<DeletePortfolio id={id} />
						</>
					)}
				</div>
			</section>
		</div>
	);
}

export default PortfolioCard;

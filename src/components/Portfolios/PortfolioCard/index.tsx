import NextLink from "next/link";
import NextImage from "next/image";
import { useRouter } from "next/router";
import { AiFillEye } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import DeletePortfolio from "@/components/Forms/Portfolio/DeletePortfolio";
import RateCard from "./RateCard";
import { parseImg } from "@/utils/parse-img";

type IProps = {
	title: string;
	description: string;
	thumbnail_path: string;
	authorName: string;
	live: string;
	openModal: (id: string) => any;
	id: string;
	currentRateAvg: number;
	currentVotes: number;
};

function PortfolioCard({
	title,
	description,
	thumbnail_path,
	authorName,
	currentRateAvg,
	currentVotes,
	openModal,

	live,
	id,
}: IProps) {
	const router = useRouter();
	const dashboardPath = "/dashboard";
	const handleCloseModal = () => {
		openModal(id);
	};

	return (
		<div className="max-w-lg min-w-sm rounded overflow-hidden shadow-lg ">
			<NextImage
				width={200}
				height={100}
				className="w-full bg-cover h-64"
				src={parseImg(thumbnail_path)}
				alt={title}
			/>
			<section className="px-6 py-4">
				<div>
					<div className="font-bold text-xl mb-2">{title}</div>
					<p className="text-gray-700 text-base">{description}</p>
					<span className="inline-block text-gray-500 text-sm font-semibold my-2">
						By: {authorName}
					</span>
				</div>
				<div className="flex gap-2 justify-center items-center flex-wrap">
					<button className="btn" onClick={handleCloseModal}>
						More detail <AiFillEye />
					</button>
					<NextLink target="_blank" className="btn mx-2" href={live}>
						See live app <HiOutlineExternalLink />
					</NextLink>

					<RateCard
						portfolioId={id}
						currentVotes={currentVotes}
						currentRateAvg={currentRateAvg}
					/>

					{router.pathname.includes(dashboardPath) && (
						<>
							<DeletePortfolio id={id} />
						</>
					)}
				</div>
			</section>
		</div>
	);
}

export default PortfolioCard;

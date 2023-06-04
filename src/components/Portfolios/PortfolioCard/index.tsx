import EditPortfolioForm from "@/components/Forms/EditPortfolioForm";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { AiFillEye } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

type IProps = {
	title: string;
	description: string;
	images: string;
	authorName: string;
	live: string;
	openModal: (id: string) => any;
	id: string;
};

function PortfolioCard({
	title,
	description,
	images,
	authorName,
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
			<img
				/* width={200}
				height={100} */
				className="w-full bg-cover h-64"
				src={images[0]}
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
				<div className="flex gap-2 justify-center items-center">
					<button className="btn" onClick={handleCloseModal}>
						More detail <AiFillEye />
					</button>
					<NextLink target="_blank" className="btn mx-2" href={live}>
						See live app <HiOutlineExternalLink />
					</NextLink>

					{router.pathname.includes(dashboardPath) && (
						<EditPortfolioForm
							portfolioId={id}
							currentValues={{ title, description, prevImage: images, live }}
						/>
					)}
				</div>
			</section>
		</div>
	);
}

export default PortfolioCard;

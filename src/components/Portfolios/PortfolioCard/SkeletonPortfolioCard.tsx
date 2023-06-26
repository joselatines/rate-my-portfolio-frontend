import Image from "next/image";

function SkeletonPortfolioCard() {
	return (
		<div className="animate-pulse max-w-lg min-w-sm rounded overflow-hidden shadow-lg ">
			<Image
				width={200}
				height={100}
				className="w-full bg-cover h-64"
				src="/public/loading.jpg"
				alt="loading"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2"></div>
				<p className="text-gray-700 text-base"></p>
			</div>
			<div className="px-6 pt-4 pb-2">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
			</div>
		</div>
	);
}

export default SkeletonPortfolioCard;

import { useEffect, useState } from "react";
import { ratePortfolio } from "@/services/portfolios";
import { toastCheckApiResponse } from "@/utils/toast-check-api-response";
import { useRouter } from "next/router";

interface RateCardProps {
	currentVotes: number;
	currentRateAvg: number;
	portfolioId: string;
}

const RateCard: React.FC<RateCardProps> = ({
	portfolioId,
	currentRateAvg,
	currentVotes,
}) => {
	const [rateNumber, setRateNumber] = useState(0);
	const [refresh, setRefresh] = useState(0);
	const router = useRouter();

	const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRateNumber(Number(event.target.value));
	};

	const handleGiveRate = async () => {
		const res = await ratePortfolio(portfolioId, {
			rate: rateNumber,
			feedback: "",
		});
		if (toastCheckApiResponse(res)) {
			router.push("/portfolios");
			setRefresh(prev => prev + 1);
		}
	};

	useEffect(() => {}, [refresh]);

	return (
		<div className="p-3 mt-3 w-full">
			<div className="grid">
				<span>
					Votes avg:{" "}
					<span
						className={`${
							currentRateAvg > 5 ? "text-green-500" : "text-red-500"
						} font-semibold`}
					>
						{currentRateAvg}/10
					</span>
				</span>
				<span>
					Votes count: <span className="font-semibold">{currentVotes}</span>
				</span>
			</div>
			<div className="flex items-center gap-2 flex-wrap justify-center  md:justify-normal">
				<input
					type="range"
					onChange={handleRateChange}
					min={1}
					max={10}
					step={1}
					value={rateNumber}
					className="cursor-ew-resize rounded-lg overflow-hidden appearance-none bg-gray-200 h-3 w-128"
				/>
				<button className="btn warning" onClick={handleGiveRate}>
					Give {rateNumber} stars
				</button>
			</div>
		</div>
	);
};

export default RateCard;

import { useEffect, useState } from "react";
import { ratePortfolio } from "@/services/portfolios";
import { toastCheckApiResponse } from "@/utils/toast-check-api-response";
import { useRouter } from "next/router";

type IProps = {
	currentVotes: number;
	currentRateAvg: number;
	portfolioId: string;
};

function RateCard({ portfolioId, currentRateAvg, currentVotes }: IProps) {
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
		<div className="shadow-lg p-3 mt-3">
			<input
				type="range"
				onChange={handleRateChange}
				min={1}
				max={10}
				step={1}
				value={rateNumber}
				className="w-full mb-2"
			/>
			<div className="flex flex-wrap">
				<span>
					Current Average Rate:{" "}
					<span
						className={`${
							currentRateAvg > 5 ? "text-green-500" : "text-red-500"
						} font-semibold`}
					>
						{currentRateAvg}/10{" "}
					</span>
				</span>
				<span>
					Current Votes: <span className="font-semibold">{currentVotes}</span>
				</span>
			</div>

			<button className="btn warning" onClick={handleGiveRate}>
				Give a {rateNumber} Rate
			</button>
		</div>
	);
}

export default RateCard;

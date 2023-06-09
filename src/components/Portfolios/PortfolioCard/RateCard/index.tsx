import { ratePortfolio } from "@/services/portfolios";
import { toastCheckApiResponse } from "@/utils/toast-check-api-response";
import { useRouter } from "next/router";
import { useState } from "react";

type IProps = {
	currentVotes: number;
	currentRateAvg: number;
	portfolioId: string;
};

function RateCard({ portfolioId, currentRateAvg, currentVotes }: IProps) {
	const [rateNumber, setRateNumber] = useState(0);
	const router = useRouter();

	const handleRateChange = (event: any) => {
		event.preventDefault();
		setRateNumber(event.target.value);
	};

	const handleGiveRate = async () => {
		const res = await ratePortfolio(portfolioId, {
			rate: rateNumber,
			feedback: "",
		});
		if (toastCheckApiResponse(res)) router.push("/portfolios");
	};
	return (
		<div>
			<input
				type="range"
				onChange={handleRateChange}
				min={1}
				max={10}
				step={1}
				value={rateNumber}
			/>

			<span>{currentRateAvg}/10</span>
			<span>Current votes: {currentVotes}</span>

			<button className="btn" onClick={handleGiveRate}>
				Give a {rateNumber} rate
			</button>
		</div>
	);
}

export default RateCard;

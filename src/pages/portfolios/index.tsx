import PortfoliosSection from "@/components/Portfolios/Section";
import { getAllPortfolios } from "@/services/portfolios";
import { Portfolio } from "@/shared/interfaces/portfolio.interface";

type IProps = {
	portfoliosList: Portfolio[];
};

export default function Portfolios({ portfoliosList }: IProps) {
	return (
		<main>
			<PortfoliosSection portfoliosList={portfoliosList} />
		</main>
	);
}

export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	const portfoliosList = await getAllPortfolios();

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			portfoliosList,
		},
	};
}

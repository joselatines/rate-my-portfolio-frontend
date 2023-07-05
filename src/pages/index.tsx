import Link from "next/link";

function Index() {
	return (
		<div className="flex items-center justify-center p-24 max-h-screen">
			<div className="text-center">
				<h1 className="text-6xl font-bold mb-6">
					Welcome to <span className="text-blue-500">ratemyportfolio.com</span>
				</h1>
				<p className="text-lg mb-6">
					The place where you can rate other peoples portfolios and upload yours
					to get instant feedback!
				</p>
				<Link className="text-blue-500 underline" href="/portfolios">
					Go to Portfolios Page
				</Link>
			</div>
		</div>
	);
}

export default Index;

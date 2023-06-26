export const parseImg = (imagePath: string) => {
	const isDev = process.env.NODE_ENV === "development";
	return `${isDev ? "http://localhost:5000/" : "https://rate-my-portfolio.onrender.com/"}${imagePath}`;
};

export const imageLoader = ({ src }: { src: string }) => {
	const { NEXT_PUBLIC_API_URI } = process.env;
	return `${NEXT_PUBLIC_API_URI}${src}`;
};

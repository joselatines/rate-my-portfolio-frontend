import * as Yup from "yup";

export const validationSchema = Yup.object({
	title: Yup.string().label("Full title"),
	description: Yup.string().label("Full description"),
	live: Yup.string().label("Live app link is required"),
});


export const inputsList = [
	{ label: "Title", name: "title", placeholder: "My first portfolio" },
	{
		label: "Live app link",
		name: "live",
		placeholder: "https://joselatines.vercel.app/",
	},
];

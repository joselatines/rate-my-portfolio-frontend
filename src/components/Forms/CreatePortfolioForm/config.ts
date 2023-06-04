import * as Yup from "yup";

export const validationSchema = Yup.object({
	title: Yup.string().label("Full title").required(),
	description: Yup.string().label("Full description").required(),
	live: Yup.string().label("Live app link is required").required(),
});

export const initialValues = {
	title: "",
	description: "",
	live: "",
	technologies: [],
	images: { fileName: "", file: {} },
};

export const inputsList = [
	{ label: "Title", name: "title", placeholder: "My first portfolio" },
	{
		label: "Live app link",
		name: "live",
		placeholder: "https://joselatines.vercel.app/",
	},
];

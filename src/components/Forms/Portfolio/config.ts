import { File } from "@/shared/interfaces/portfolio.interface";
import { toast } from "react-hot-toast";
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
	thumbnail_path: {
		webkitRelativePath: "",
		type: "",
		size: 0,
		name: "",
		lastModifiedDate: 0,
	},
};

export const inputsList = [
	{ label: "Title", name: "title", placeholder: "My first portfolio" },
	{
		label: "Live app link",
		name: "live",
		placeholder: "https://joselatines.vercel.app/",
	},
];

export const checkImageAndTechFields = (
	imageFile: File,
	technologiesArray: string[]
) => {
	if (technologiesArray.length === 0) {
		toast.error("You need to add a technology");
		return false;
	}

	if (!imageFile || !imageFile.name) {
		toast.error("You need to add an image");
		return false;
	}

	return true;
};

import * as Yup from "yup";
import { useFormik } from "formik";
import { IoIosCreate } from "react-icons/io";
import CustomModal from "@/components/shared/CustomModal";
import CustomTextInput from "../CustomTextInput";
import CustomTextarea from "../CustomTextarea";
import { newPortfolio } from "@/services/portfolios";
import TechnologiesCheckboxes from "../TechnologiesCheckboxes";
import { toastCheckApiResponse } from "@/utils/toast-check-api-response";
import { CreatePortfolio } from "@/shared/interfaces/portfolio.interface";
import FileUpload from "@/components/FileUpload";
import { toast } from "react-hot-toast";

const validationSchema = Yup.object({
	title: Yup.string().label("Full title").required(),
	description: Yup.string().label("Full description").required(),
	live: Yup.string().label("Live app link is required").required(),
});

const initialValues = {
	title: "",
	description: "",
	live: "",
	technologies: [],
	images: { fileName: "", file: {} },
};

const inputsList = [
	{ label: "Title", name: "title", placeholder: "My first portfolio" },
	{
		label: "Live app link",
		name: "live",
		placeholder: "https://joselatines.vercel.app/",
	},
];

function CreatePortfolioForm() {
	const handleSubmit = async (
		portfolioData: CreatePortfolio,
		{ resetForm }: any
	) => {
		const res = await newPortfolio(portfolioData);
		if (toastCheckApiResponse(res)) {
			toast("You can close this", {
				icon: "👏",
			});
			resetForm(initialValues);
		}
	};

	const formik = useFormik({
		validationSchema,
		initialValues,
		onSubmit: handleSubmit,
	});

	return (
		<CustomModal message="New portfolio" icon={<IoIosCreate />}>
			<form
				onSubmit={formik.handleSubmit}
				className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[60vw]"
				encType="multipart/form-data"
			>
				<h1 className="text-3xl font-bold mb-3 text-center">
					Create a portfolio
				</h1>

				{inputsList.map(input => (
					<CustomTextInput key={input.name} formik={formik} {...input} />
				))}

				<CustomTextarea
					formik={formik}
					name="description"
					placeholder="My first portfolio..."
					label="Description"
				/>

				<TechnologiesCheckboxes formik={formik} arrayName="technologies" />

				<FileUpload formik={formik} />
				<div className="text-center">
					<button
						className={`bg-blue-500 rounded p-3 text-white ${
							formik.isSubmitting && "disabled"
						}`}
						type="submit"
						disabled={formik.isSubmitting}
					>
						Create portfolio
					</button>
				</div>
			</form>
		</CustomModal>
	);
}

export default CreatePortfolioForm;

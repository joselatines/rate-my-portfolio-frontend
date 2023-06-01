"use client";
import * as Yup from "yup";
import { useFormik } from "formik";
import { IoIosCreate } from "react-icons/io";
import CustomModal from "@/components/shared/CustomModal";
import CustomTextInput from "../CustomTextInput";
import CustomTextarea from "../CustomTextarea";
import { newPortfolio } from "@/services/portfolios";
import TechnologiesCheckboxes from "../TechnologiesCheckboxes";
import { toastCheckApiResponse } from "@/utils/toast-check-api-response";

type FormValues = {
	title: string;
	description: string;
	live: string;
	technologies: string[];
};

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
	const handleSubmit = async (portfolioData: any) => {
		const res = await newPortfolio(portfolioData);
		toastCheckApiResponse(res);
	};

	const formik = useFormik({
		validationSchema,
		initialValues,
		onSubmit: handleSubmit,
	});

	return (
		<CustomModal message="New portfolio" icon={<IoIosCreate />}>
			<div className="bg-blue-300 min-w-screen min-h-screen overflow-x-hidden">
				<form
					onSubmit={formik.handleSubmit}
					className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				>
					<h1 className="text-3xl mb-3 text-center">Create a portfolio</h1>

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
					<div className="text-center">
						<button
							className="bg-blue-500 rounded p-3 text-white "
							type="submit"
							disabled={formik.isSubmitting}
						>
							{formik.isSubmitting && (
								<svg
									className="animate-spin h-5 w-5 mr-3 ..."
									viewBox="0 0 24 24"
								></svg>
							)}
							Create portfolio
						</button>
					</div>
				</form>
			</div>
		</CustomModal>
	);
}

export default CreatePortfolioForm;

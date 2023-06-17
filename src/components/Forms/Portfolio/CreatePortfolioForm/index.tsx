import { useFormik } from "formik";
import { IoIosCreate } from "react-icons/io";
import CustomModal from "@/components/shared/CustomModal";
import CustomTextInput from "../../CustomTextInput";
import CustomTextarea from "../../CustomTextarea";
import { newPortfolio } from "@/services/portfolios";
import TechnologiesCheckboxes from "../../TechnologiesCheckboxes";
import { toastCheckApiResponse } from "@/utils/toast-check-api-response";
import { CreatePortfolio } from "@/shared/interfaces/portfolio.interface";
import FileUpload from "@/components/FileUpload";
import {
	checkImageAndTechFields,
	initialValues,
	inputsList,
	validationSchema,
} from "../config";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

function CreatePortfolioForm() {
	const [openModal, setOpenModal] = useState(false);
	const router = useRouter();

	const handleSubmit = async (
		portfolioData: CreatePortfolio,
		{ resetForm }: any
	) => {
		const imageFile = portfolioData.thumbnail_path;
		const technologiesArray = portfolioData.technologies;

		if (checkImageAndTechFields(imageFile, technologiesArray)) {
			try {
				const res = await newPortfolio(portfolioData);

				if (res.status === 200) {
					toast.success(res.data.message);
					setOpenModal(false);
					resetForm(initialValues);
					router.push("/portfolios");
				}
			} catch (error: any) {
				console.error(error);
				toast.error(error.message);
			}
		}
	};

	const formik = useFormik({
		validationSchema,
		initialValues,
		onSubmit: handleSubmit,
	});

	return (
		<CustomModal
			open={openModal}
			setOpen={setOpenModal}
			message="New portfolio"
			icon={<IoIosCreate />}
		>
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

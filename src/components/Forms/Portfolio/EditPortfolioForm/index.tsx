import { useState } from "react";
import NextImage from "next/image";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { AiFillEdit } from "react-icons/ai";
import CustomModal from "@/components/shared/CustomModal";
import CustomTextInput from "../../CustomTextInput";
import CustomTextarea from "../../CustomTextarea";
import { editPortfolio } from "@/services/portfolios";
import TechnologiesCheckboxes from "../../TechnologiesCheckboxes";
import { toastCheckApiResponse } from "@/utils/toast-check-api-response";
import { EditPortfolio } from "@/shared/interfaces/portfolio.interface";
import FileUpload from "@/components/FileUpload";
import { inputsList, validationSchema } from "../config";

type IProps = {
	portfolioId: string;
	currentValues: EditPortfolio;
};

function EditPortfolioForm({ portfolioId, currentValues }: IProps) {
	const [openModal, setOpenModal] = useState(false);
	const router = useRouter();

	const initialValues = {
		...currentValues,
		thumbnail_path: {
			webkitRelativePath: "",
			type: "",
			size: 0,
			name: "",
			lastModifiedDate: 0,
		},
	};

	const handleSubmit = async (
		portfolioData: EditPortfolio,
		{ resetForm }: any
	) => {
		console.log(portfolioData);
		const res =await editPortfolio(portfolioData, portfolioId);

		if (toastCheckApiResponse(res)) {
			setOpenModal(false);
			resetForm(initialValues);
			router.push("/dashboard");
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
			message="Edit portfolio"
			icon={<AiFillEdit />}
		>
			<form
				onSubmit={formik.handleSubmit}
				className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[60vw]"
				encType="multipart/form-data"
			>
				<h1 className="text-3xl font-bold mb-3 text-center">
					Edit a portfolio
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
				{currentValues.technologies?.map(tech => (
					<span>{tech}</span>
				))}
				<NextImage
					src={currentValues.prevImage || ""}
					alt={currentValues.title || ""}
					width={100}
					height={100}
				/>
				<FileUpload formik={formik} />
				<div className="text-center">
					<button
						className={`bg-blue-500 rounded p-3 text-white ${
							formik.isSubmitting && "disabled"
						}`}
						type="submit"
						disabled={formik.isSubmitting}
					>
						Edit portfolio
					</button>
				</div>
			</form>
		</CustomModal>
	);
}

export default EditPortfolioForm;

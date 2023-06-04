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
import { useCustomModal } from "@/hooks/useCustomModal";
import { inputsList, validationSchema } from "../config";

type IProps = {
	portfolioId: string;
	currentValues: EditPortfolio;
};

function EditPortfolioForm({ portfolioId, currentValues }: IProps) {
	const { setOpen } = useCustomModal();
	const initialValues = {
		...currentValues,
		images: { fileName: "", file: {} },
	};

	const handleSubmit = async (
		portfolioData: EditPortfolio,
		{ resetForm }: any
	) => {
		const res = await editPortfolio(portfolioData, portfolioId);
		if (toastCheckApiResponse(res)) {
			setOpen(false);
			resetForm(initialValues);
		}
	};

	const formik = useFormik({
		validationSchema,
		initialValues,
		onSubmit: handleSubmit,
	});

	return (
		<CustomModal message="Edit portfolio" icon={<AiFillEdit />}>
			<form
				onSubmit={formik.handleSubmit}
				className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[60vw]"
				encType="multipart/form-data"
			>
				{portfolioId}
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

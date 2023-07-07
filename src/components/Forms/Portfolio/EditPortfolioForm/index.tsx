import { useRouter } from "next/router";
import { useFormik } from "formik";
import CustomTextInput from "../../CustomTextInput";
import CustomTextarea from "../../CustomTextarea";
import { editPortfolio } from "@/services/portfolios";
import { toastCheckApiResponse } from "@/utils/toast-check-api-response";
import { IPortfolio } from "@/shared/interfaces/portfolio.interface";
import { inputsList, validationSchema } from "../config";

type EditPortfolioFormProps = {
	id: string;
	portfolio: IPortfolio;
};

const EditPortfolioForm: React.FC<EditPortfolioFormProps> = ({
	id,
	portfolio,
}) => {
	const router = useRouter();

	const formik = useFormik<any>({
		initialValues: portfolio,
		validationSchema,
		onSubmit: async values => {
			const response = await editPortfolio(values, id);

			if (toastCheckApiResponse(response)) {
				router.push("/portfolios");
			}
		},
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[60vw]"
			encType="multipart/form-data"
		>
			<h1 className="text-3xl font-bold mb-3 text-center">Edit a portfolio</h1>

			{inputsList.map(input => (
				<CustomTextInput key={input.name} {...input} formik={formik} />
			))}

			<CustomTextarea
				name="description"
				placeholder="My first portfolio..."
				label="Description"
				formik={formik}
			/>

			<div className="text-center">
				<button
					className="bg-blue-500 rounded p-3 text-white"
					type="submit"
					disabled={formik.isSubmitting}
				>
					Edit portfolio
				</button>
			</div>
		</form>
	);
};

export default EditPortfolioForm;

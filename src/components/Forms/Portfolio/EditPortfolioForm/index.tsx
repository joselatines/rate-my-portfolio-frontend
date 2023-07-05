import { useEffect, useState } from "react";
import NextImage from "next/image";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { AiFillEdit } from "react-icons/ai";
import CustomModal from "@/components/shared/CustomModal";
import CustomTextInput from "../../CustomTextInput";
import CustomTextarea from "../../CustomTextarea";
import { editPortfolio, getOnePortfolio } from "@/services/portfolios";
import TechnologiesCheckboxes from "../../TechnologiesCheckboxes";
import { toastCheckApiResponse } from "@/utils/toast-check-api-response";
import {
	EditPortfolio,
	Portfolio,
} from "@/shared/interfaces/portfolio.interface";
import FileUpload from "@/components/FileUpload";
import {
	inputsList,
	validationSchema,
	initialValues as defaultInitialValues,
} from "../config";
import Loader from "@/components/shared/Loader";

type EditPortfolioFormProps = {
	id: string;
};

const EditPortfolioForm: React.FC<EditPortfolioFormProps> = ({ id }) => {
	const [openModal, setOpenModal] = useState(false);
	const [initialValues, setInitialValues] = useState<any>(defaultInitialValues);
	const router = useRouter();

	const getCurrentPortfolioValues = async (id: string) => {
		const portfolio = await getOnePortfolio(id);
		setInitialValues(portfolio);
	};

	useEffect(() => {
		getCurrentPortfolioValues(id);
	}, []);

	const handleSubmit = async (
		portfolioData: EditPortfolio,
		{ resetForm }: any
	) => {
		const res = await editPortfolio(portfolioData, id);

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

	if (!initialValues) return <Loader />;

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
				{initialValues.technologies?.map((tech: string) => (
					<span key={tech}>{tech}</span>
				))}
				<NextImage
					src={initialValues.thumbnail_path}
					alt={initialValues.title}
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
};

export default EditPortfolioForm;

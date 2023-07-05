import { useEffect, useState } from "react";
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
import { inputsList, editInitialValues } from "../config";
import Loader from "@/components/shared/Loader";

type EditPortfolioFormProps = {
	id: string;
};

const EditPortfolioForm: React.FC<EditPortfolioFormProps> = ({ id }) => {
	const [openModal, setOpenModal] = useState(false);
	const [portfolio, setPortfolio] = useState<Portfolio | any>(null);
	const [loading, setLoading] = useState(true);

	const router = useRouter();

	const getCurrentPortfolioValues = async (id: string) => {
		const response = await getOnePortfolio(id);
		const data = response.data;

		if (response.success) {
			setPortfolio(data);
		}
		setLoading(false);
	};

	useEffect(() => {
		getCurrentPortfolioValues(id);
	}, [id]);

	const formik = useFormik<EditPortfolio>({
		initialValues: portfolio || editInitialValues,
		onSubmit: async values => {
			const response = await editPortfolio(values, id);

			if (toastCheckApiResponse(response)) {
				setOpenModal(false);
				router.push("/portfolios");
			}
		},
	});

	if (loading) {
		return <Loader />;
	}

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
					<CustomTextInput key={input.name} {...input} formik={formik} />
				))}

				<CustomTextarea
					name="description"
					placeholder="My first portfolio..."
					label="Description"
					formik={formik}
				/>

				<TechnologiesCheckboxes formik={formik} arrayName="technologies" />

				<FileUpload formik={formik} />

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
		</CustomModal>
	);
};

export default EditPortfolioForm;

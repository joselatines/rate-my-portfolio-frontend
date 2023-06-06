import { useState } from "react";

const inputName = "thumbnail_path";

export default function FileUpload({ formik }: any) {
	const [file, setFile] = useState("");
	const [fileName, setFileName] = useState("");

	const handleChange = (e: any) => {
		const file = e.target.files[0];

		if (file) {
			setFile(e.target.files[0]);
			setFileName(e.target.files[0].name);
			formik.setFieldValue(inputName, file);
		}
	};

	const saveFile = (e: any) => {
		console.info({ file, fileName });
	};

	const uploadFile = async (e: any) => {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("name", fileName);
	};

	return (
		<div>
			<input
				type="file"
				accept="image/*"
				name={inputName}
				id={inputName}
				onChange={handleChange}
				onBlur={formik.handleBlur}
			/>
			<button onClick={uploadFile}>Upload</button>
		</div>
	);
}

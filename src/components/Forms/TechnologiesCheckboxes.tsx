import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

type IProps = {
	formik: any;
	arrayName: "technologies";
};

const technologies = [
	{ name: "javascript", icon: <IoLogoJavascript />, checked: false },
	{ name: "react", icon: <FaReact />, checked: true },
];

export default function TechnologiesCheckboxes({ formik, arrayName }: IProps) {
	const handleChange = (e: any) => {
		const { checked, name } = e.target;
		const checkboxesList: string[] = formik.values[arrayName];

		if (checked) {
			formik.setFieldValue(arrayName, [...formik.values[arrayName], name]);
		} else {
			formik.setFieldValue(
				arrayName,
				checkboxesList.filter(v => v !== name)
			);
		}
	};
	return (
		<div className="flex gap-3">
			{technologies.map(({ name, icon }) => (
				<label key={name}>
					{icon}
					<input
						type="checkbox"
						name={name}
						id={name}
						onChange={handleChange}
						onBlur={formik.handleBlur}
						value={formik.values[name]}
					/>
				</label>
			))}
			{formik.touched[arrayName] && formik.errors[arrayName] && (
				<span className="text-red-400">{formik.errors[arrayName]}</span>
			)}
		</div>
	);
}

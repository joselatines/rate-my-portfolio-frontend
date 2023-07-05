type IProps = {
	formik?: any;
	placeholder: string;
	name: string;
	label: string;
	onChange?: (e: any) => any;
};

function CustomTextInput({
	formik,
	name,
	label,
	placeholder,
	onChange,
}: IProps) {
	if (!formik)
		return (
			<div className="mb-4">
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor={name}
					>
						{label}
					</label>
					<input
						className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
						type="text"
						name={name}
						id={name}
						placeholder={placeholder}
						onChange={onChange}
					/>
				</div>
			</div>
		);

	return (
		<div className="mb-4">
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor={name}
				>
					{label}
				</label>
				<input
					className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
						formik.touched[name] && formik.errors[name]
							? "border-red-400"
							: "border-gray-300"
					}`}
					type="text"
					name={name}
					id={name}
					placeholder={placeholder}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values[name]}
				/>

				{formik.touched[name] && formik.errors[name] && (
					<span className="text-red-400">{formik.errors[name]}</span>
				)}
			</div>
		</div>
	);
}

export default CustomTextInput;

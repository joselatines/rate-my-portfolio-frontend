import { useFormik } from "formik";
import * as Yup from "yup";
import CustomTextInput from "../CustomTextInput";
import { login as apiLogin } from "@/services/auth";
import { toastCheckApiResponse } from "@/utils/toast-check-api-response";
import { AuthLogin } from "@/shared/interfaces/auth.interface";
import { useRouter } from "next/router";
import { useContextUser } from "@/hooks/useContextUser";
import Cookies from "js-cookie";

const validationSchema = Yup.object({
	password: Yup.string()
		.label("Password is required")
		.min(2, "password must be 2 characters min")
		.required(),
	email: Yup.string().label("Email is required").email().required(),
});

const initialValues = {
	password: "",
	email: "",
};

function LoginForm() {
	const router = useRouter();
	const { login } = useContextUser();

	const handleSubmit = async (credentials: AuthLogin) => {
		const res = await apiLogin(credentials);

		if (toastCheckApiResponse(res)) {
			const { data } = res;
			const user = JSON.stringify(data);
			Cookies.set("access_token", data.token);
			Cookies.set("user", user);
			router.push("/portfolios");
			login();
		}
	};

	const formik = useFormik({
		validationSchema,
		initialValues,
		onSubmit: handleSubmit,
	});
	return (
		<div className="min-h-[80vh] py-6 flex flex-col justify-center sm:py-12">
			<div className="relative py-3 sm:max-w-xl sm:mx-auto">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
				<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
					<div className="max-w-md mx-auto">
						<div>
							<h1 className="text-2xl font-semibold">Login Form</h1>
						</div>
						<div className="divide-y divide-gray-200">
							<form
								onSubmit={formik.handleSubmit}
								className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
							>
								<div>
									<CustomTextInput
										formik={formik}
										label="Email"
										name="email"
										placeholder="example@gmail.com"
									/>
									<CustomTextInput
										formik={formik}
										label="Password"
										name="password"
										placeholder="your_password_123"
									/>
								</div>

								<div className="relative">
									<button
										type="submit"
										disabled={formik.isSubmitting}
										className={`btn ${formik.isSubmitting && "disabled"}`}
									>
										Login
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;

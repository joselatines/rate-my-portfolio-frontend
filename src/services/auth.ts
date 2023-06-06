import { errorApiReqHandler } from "@/errors/error-api-req-handler";
import { AuthLogin, AuthSignUp } from "@/shared/interfaces/auth.interface";
import axios from "axios";

const NEXT_PUBLIC_API_URI = process.env.NEXT_PUBLIC_API_URI;

export const login = async (credentials: AuthLogin) => {
	const options = {
		method: "POST",
		url: `${NEXT_PUBLIC_API_URI}/auth/login`,
		withCredentials: true,
		headers: {
			"Content-Type": "application/json",
		},
		data: credentials,
	};

	try {
		const res = await axios.request(options);
		const data = await res.data;
		return data;
	} catch (err) {
		errorApiReqHandler(err);
	}
};

export const signUp = async (credentials: AuthSignUp) => {
	const options = {
		method: "POST",
		url: `${NEXT_PUBLIC_API_URI}/auth/sign-up`,
		withCredentials: true,
		headers: {
			"Content-Type": "application/json",
		},
		data: credentials,
	};

	try {
		const res = await axios.request(options);

		const data = await res.data;
		return data;
	} catch (err) {
		errorApiReqHandler(err);
	}
};

export const logout = async () => {
	const options = {
		method: "POST",
		url: `${NEXT_PUBLIC_API_URI}/auth/logout`,
		withCredentials: true,
	};

	try {
		const res = await axios.request(options);
		const data = await res.data;
		return data;
	} catch (err) {
		errorApiReqHandler(err);
	}
};

import { Auth } from "@/shared/interfaces/auth.interface";
import axios from "axios";

const NEXT_PUBLIC_API_URI = process.env.NEXT_PUBLIC_API_URI;

export const login = async (credentials: Auth) => {
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
		console.log(err);
	}
};

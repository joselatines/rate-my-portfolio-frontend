import { errorApiReqHandler } from "@/errors/error-api-req-handler";
import { IUser } from "@/shared/interfaces/user.interface";
import axios from "axios";
import { IServiceResponse } from "./service-response.interface";

type GetUser = (id: string) => Promise<IServiceResponse<IUser>>;
const NEXT_PUBLIC_API_URI = process.env.NEXT_PUBLIC_API_URI;

// Axios request interceptor to include cookies with each request
axios.interceptors.request.use(config => {
	config.withCredentials = true;
	return config;
});

export const getOneUser: GetUser = async (id: string) => {
	try {
		const res = await axios.get(`${NEXT_PUBLIC_API_URI}/users/${id}`);

		return res.data;
	} catch (err) {
		return errorApiReqHandler(err);
	}
};

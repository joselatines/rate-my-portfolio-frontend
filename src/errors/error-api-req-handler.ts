import { AxiosError } from "axios";

interface CustomError {
	success: false;
	message: string;
}

export function errorApiReqHandler(
	error: AxiosError | Error | any
): CustomError {
	console.error("⚠️: ", error);
	let message = error.message;

	if (error instanceof AxiosError && error.response) {
		message = error.response.data.message || message;
	}

	return {
		success: false,
		message: message,
	};
}

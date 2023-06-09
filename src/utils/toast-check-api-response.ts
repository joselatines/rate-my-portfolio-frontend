import { toast } from "react-hot-toast";

export function toastCheckApiResponse(apiDataResponse: any) {
	console.log({ apiDataResponse });
	if (apiDataResponse.error) {
		toast.error(apiDataResponse.error);
		return false;
	}

	toast.success(apiDataResponse.message);
	return true;
}

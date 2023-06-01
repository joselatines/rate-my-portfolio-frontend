import { toast } from "react-hot-toast";

export function toastCheckApiResponse(apiDataResponse: any) {
	if (apiDataResponse.error) {
		toast.error(apiDataResponse.message);
		return false;
	}

	toast.success(apiDataResponse.message);
	return true;
}

import { toast } from "react-hot-toast";

export function toastCheckApiResponse(apiDataResponse: any) {
	if (!apiDataResponse.data) {
		toast.error(apiDataResponse.error);
		return false;
	}

	toast.success(apiDataResponse.message);
	return true;
}

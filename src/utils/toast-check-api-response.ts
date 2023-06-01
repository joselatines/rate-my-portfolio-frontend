import { toast } from "react-hot-toast";

export function toastCheckApiResponse(apiDataResponse: any) {
	console.log(apiDataResponse, 'perrar')
	if (!apiDataResponse.data ) {
		toast.error(apiDataResponse.error);
		return false;
	}

	toast.success(apiDataResponse.message);
	return true;
}

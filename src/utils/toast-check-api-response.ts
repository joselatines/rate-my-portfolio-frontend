import { IServiceResponse } from "@/services/service-response.interface";
import { toast } from "react-hot-toast";

export function toastCheckApiResponse(response: IServiceResponse<any>) {
	if (!response.success) {
		toast.error(response.data?.message || response.message);
		return false;
	}

	toast.success(response.data?.message || response.message);
	return true;
}

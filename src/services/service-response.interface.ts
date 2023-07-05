export interface IServiceResponse<T> {
	data?: T;
	message: string;
	success: boolean;
}

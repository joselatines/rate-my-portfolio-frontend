class CustomAPIError extends Error {
	statusCode: number;
	constructor(message: string) {
		super(message);
		this.statusCode = 200;
	}
}

export default CustomAPIError;

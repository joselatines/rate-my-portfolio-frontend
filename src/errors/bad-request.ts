import CustomAPIError from "./custom-error";

class BadRequestError extends CustomAPIError {
	constructor(message: string) {
		super(message);
		this.statusCode = 400;
	}
}

export default BadRequestError;

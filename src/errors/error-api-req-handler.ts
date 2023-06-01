export function errorApiReqHandler(error: any) {
	console.error("⚠️: ", error);
	return { error: error, message: error.message };
}

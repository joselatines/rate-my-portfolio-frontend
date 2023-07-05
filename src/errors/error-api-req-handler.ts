export function errorApiReqHandler(error: any) {
	console.error("⚠️: ", error);
	return { success: false, message: error.message };
}

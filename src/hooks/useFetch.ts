import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export interface DataState {
	loading: boolean;
	data: any;
	error: string | null | any;
}

export const useFetch = (url: string) => {
	const [dataState, setDataState] = useState<DataState>({
		data: [],
		loading: true,
		error: null,
	});

	const handleFetch = useCallback(async () => {
		try {
			const response = await axios.get(url, { withCredentials: true });

			setDataState(prev => ({
				...prev,
				loading: false,
				data: response.data.data,
			}));
		} catch (error) {
			console.error(error);
			setDataState(prev => ({
				...prev,
				loading: false,
				error: error,
			}));
		}
	}, []);

	useEffect(() => {
		if (dataState.data.length === 0) handleFetch();
	}, []);

	return {
		...dataState,
	};
};

import { useState, useEffect, useCallback } from "react";

export interface DataState {
	loading: boolean;
	data: any;
	error: string | null;
}

export const useFetch = (url: string) => {
	const [dataState, setDataState] = useState<DataState>({
		data: [],
		loading: true,
		error: null,
	});

	const handleFetch = useCallback(async () => {
		try {
			const response = await fetch(url, {
				credentials: "include",
			});

			if (!response.ok) throw new Error(response.statusText);

			const dataApi = await response.json();

			setDataState(prev => ({
				...prev,
				loading: false,
				data: dataApi.data,
			}));


		} catch (error) {
			setDataState(prev => ({
				...prev,
				loading: false,
				error: (error as Error).message,
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

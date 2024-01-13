import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
	count: number;
	// results: [Game];
	results: T[];
}

const useData = <T>(endpoint: string, pageNo?: number) => {
	// The extra parameters we pass in the .get() are called AxiosRequestConfig, and we can pass it directly into the function above like "config: AxiosRequestConfig" and then destructure it in the .get(). For the dependencies in the useEffect, we can pass arrays of dependencies in the function also, like deps: [], then put this coe in the useEffect, "deps ? [...deps]: []"
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		// setLoading(true);
		const controller = new AbortController();
		apiClient
			.get<FetchResponse<T>>(endpoint, { signal: controller.signal, params: { page: pageNo } })
			.then((res) => {
				setData(res.data.results);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
			})
			.finally(() => {
				setLoading(false);
			});

		return () => controller.abort();
	}, [pageNo]);

	return { data, error, isLoading };
};

export default useData;

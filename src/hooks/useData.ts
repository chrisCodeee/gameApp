import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
	count: number;
	// results: [Game];
	results: T[];
}

const useData = <T>(endpoint: string, config?: AxiosRequestConfig, deps?: any[]) => {
	// const deps = [pageNo, selectedGenre];
	// The extra parameters we pass in the .get() are called AxiosRequestConfig, and we can pass it directly into the function above like "config: AxiosRequestConfig" and then destructure it in the .get(). For the dependencies in the useEffect, we can pass arrays of dependencies in the function also, like deps: [], then put this coe in the useEffect, "deps ? [...deps]: []"
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(true);

	useEffect(
		() => {
			// setLoading(true);
			const controller = new AbortController();
			apiClient
				.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...config })
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
		},
		deps ? [...deps] : []
	);

	return { data, error, isLoading };
};

export default useData;

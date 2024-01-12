import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: [{ platform: Platform }];
	metacritic: number;
}

interface FetchGamesResponse {
	count: number;
	// results: [Game];
	results: Game[];
}

const useGames = (endpoint: string) => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		// setLoading(true);
		const controller = new AbortController();
		apiClient
			.get<FetchGamesResponse>(endpoint, { signal: controller.signal })
			.then((res) => setGames(res.data.results))
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
			})
			.finally(() => {
				setLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { games, error, isLoading };
};

export default useGames;

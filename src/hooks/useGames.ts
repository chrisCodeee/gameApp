import useData from "./useData";

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

const useGames = (pageNo: number, selectedGenre: number) =>
	useData<Game>("/games", { params: { page: pageNo, genres: selectedGenre } }, [pageNo, selectedGenre]);

export default useGames;

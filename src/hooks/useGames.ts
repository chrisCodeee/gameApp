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

const useGames = (pageNo: number, selectedGenre: number, selectedPlatform: number, sortOrder: string, searchValue: string) =>
	useData<Game>(
		"/games",
		{ params: { page: pageNo, genres: selectedGenre, platforms: selectedPlatform, ordering: sortOrder, search: searchValue } },
		[pageNo, selectedGenre, selectedPlatform, sortOrder, searchValue]
	);

export default useGames;

import useGames from "../../hooks/useGames";
import CardSkeleton from "../CardSkeleton";
import GameCard from "../GameCard";
import NextPage from "../Page/NextPage";
import { GameContainer } from "./GameGridStyles";
interface Props {
	pageNo: number;
	selectedGenre: number;
	selectedPlatform: number;
	nextPage: () => void;
	previousPage: () => void;
	genre: any;
	sortOrder: string;
	searchValue: string;
}

const GameGrid = ({ pageNo, selectedGenre, selectedPlatform, nextPage, previousPage, genre, sortOrder, searchValue }: Props) => {
	const { data, error, isLoading } = useGames(pageNo, selectedGenre, selectedPlatform, sortOrder, searchValue);
	const loading = [1, 2, 3, 4, 5, 6];
	if (error) return <p className="text-danger">Network Error</p>;
	if (data.length === 0 && !isLoading) return <p className="text-danger">No video found in platform, please select another platform or genre</p>;

	return (
		<>
			{isLoading && (
				<div className="row gy-5">
					{loading.map((skeleton) => (
						<GameContainer key={skeleton} className="col-12 col-sm-6 col-lg-4 px-3 ps-sm-3">
							<CardSkeleton />
						</GameContainer>
					))}
				</div>
			)}

			<div className="row gy-5">
				{data.map((game) => (
					<GameContainer key={game.id} className="col-12 col-sm-6 col-lg-4 px-3 ps-sm-3">
						<GameCard game={game} />
					</GameContainer>
				))}
			</div>
			<NextPage nextPage={nextPage} previousPage={previousPage} pageNo={pageNo} genreName={genre} />
		</>
	);
};

export default GameGrid;

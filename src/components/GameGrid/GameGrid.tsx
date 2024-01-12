import useGames from "../../hooks/useGames";
import CardSkeleton from "../CardSkeleton";
import GameCard from "../GameCard";
import { GameContainer } from "./GameGridStyles";

const GameGrid = () => {
	const { games, error, isLoading } = useGames("/games");
	const loading = [1, 2, , 3, 4, 5, 6];
	return (
		<>
			{error && <p className="text-danger">Network Error</p>}
			{isLoading && (
				<div className="row gy-5">
					{loading.map((skeleton) => (
						<GameContainer key={skeleton} className="col-12 col-sm-6 col-md-4 col-lg-3 px-3 ps-sm-3">
							<CardSkeleton />
						</GameContainer>
					))}
				</div>
			)}
			<div className="row gy-5">
				{games.map((game) => (
					<GameContainer className="col-12 col-sm-6 col-md-4 col-lg-3 px-3 ps-sm-3">
						<GameCard key={game.id} game={game} />
					</GameContainer>
				))}
			</div>
		</>
	);
};

export default GameGrid;

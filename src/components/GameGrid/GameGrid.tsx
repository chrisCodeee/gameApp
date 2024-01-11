import useGames from "../../hooks/useGames";
import GameCard from "../GameCard";
import { GameContainer } from "./GameGridStyles";

const GameGrid = () => {
	const { games, error } = useGames("/games");
	return (
		<>
			{error && <p className="text-danger">Network Error!!!</p>}
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

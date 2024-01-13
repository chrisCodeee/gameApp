import useGames from "../../hooks/useGames";
import CardSkeleton from "../CardSkeleton";
import GameCard from "../GameCard";
import { GameContainer } from "./GameGridStyles";
interface Props {
	pageNo: number;
}

const GameGrid = ({ pageNo }: Props) => {
	const { data, error, isLoading } = useGames(pageNo);
	const loading = [1, 2, 3, 4, 5, 6];
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
				{data.map((game) => (
					<GameContainer key={game.id} className="col-12 col-sm-6 col-md-4 col-lg-3 px-3 ps-sm-3">
						<GameCard game={game} />
					</GameContainer>
				))}
			</div>
		</>
	);
};

export default GameGrid;

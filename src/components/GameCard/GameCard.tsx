import { Game } from "../../hooks/useGames";
import { Container, CardHeading, CardBody, CardImage, CardImageContainer } from "./GameCardStyles";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Container>
			<CardImageContainer>
				<CardImage src={game.background_image} />
			</CardImageContainer>
			<CardBody className="px-4">
				<CardHeading>{game.name}</CardHeading>
			</CardBody>
		</Container>
	);
};

export default GameCard;

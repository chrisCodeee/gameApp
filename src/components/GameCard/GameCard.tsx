import { Game } from "../../hooks/useGames";
import CriticScore from "../CriticScore";
import PlatformIconList from "../PlatformIconList/PlatformIconList";
import { Container, CardHeading, CardBody, CardImage, CardImageContainer, IconContainer } from "./GameCardStyles";
import getCroppedImageUrl from "./image-url";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	try {
	} catch {
		alert("Error");
	}
	return (
		<Container>
			<CardImageContainer>
				{game.background_image ? <CardImage src={getCroppedImageUrl(game.background_image)} /> : <p className="text-danger ms-4"> No image found</p>}

				{/* <CardImage src={game.background_image} /> */}
			</CardImageContainer>
			<CardBody className="p-4">
				<CardHeading>{game.name}</CardHeading>
				<IconContainer>
					<PlatformIconList game={game} />
					<CriticScore score={game.metacritic} />
				</IconContainer>
			</CardBody>
		</Container>
	);
};

export default GameCard;

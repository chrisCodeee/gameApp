import useGenre from "../../hooks/useGenre";
import getCroppedImageUrl from "../GameCard/image-url";
import Spinner from "../Spinner";
import { Button } from "./GenreCardStyle";
interface Props {
	onSelectGenre: (genre: number) => void;
	showGenre: (genre: string) => void;
	selectedGenre: number;
	setPageNo: (page: number) => void;
}

const GenreCard = ({ onSelectGenre, showGenre, selectedGenre, setPageNo }: Props) => {
	const { data, isLoading, error } = useGenre();
	if (error) return null;
	if (isLoading) return <Spinner />;

	return (
		<>
			<ul className="p-0">
				{data.map((genre) => (
					<li key={genre.id}>
						<div className="d-flex align-item-center mb-4">
							<Button
								style={{ fontWeight: selectedGenre === genre.id ? "bold" : "normal" }}
								onClick={() => {
									onSelectGenre(genre.id);
									showGenre(genre.name);
									setPageNo(1);
								}}>
								<img
									src={getCroppedImageUrl(genre.image_background)}
									alt="images"
									style={{ height: "30px", borderRadius: "8px", width: "30px", objectFit: "cover" }}
								/>
								<span className="ms-3 fs-4 genreLink">{genre.name}</span>
							</Button>
						</div>
					</li>
				))}
			</ul>
		</>
	);
};

export default GenreCard;

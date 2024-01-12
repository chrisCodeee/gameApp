import useGenre from "../../hooks/useGenre";
import getCroppedImageUrl from "../GameCard/image-url";

const GenreCard = () => {
	const { data } = useGenre();
	return (
		<ul className="p-0">
			{data.map((genre) => (
				<li key={genre.id}>
					<div className="d-flex align-item-center mb-4">
						<img
							src={getCroppedImageUrl(genre.image_background)}
							alt="images"
							style={{ height: "30px", borderRadius: "8px", width: "30px", objectFit: "cover" }}
						/>
						<span className="ps-3 fs-4">{genre.name}</span>
					</div>
				</li>
			))}
		</ul>
	);
};

export default GenreCard;

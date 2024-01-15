import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreCard from "./components/GenreCard/GenreCard";
import NavBar from "./components/NavBar";
import "./App.css";
import GameFilter from "./components/GameFilter";
import SortSelector from "./components/SortSelector";

const App = () => {
	const [pageNo, setPageNo] = useState(1);
	const [selectedGenre, setSelectedGenre] = useState(1);
	const [genre, setGenreName] = useState<any>(null);
	const [sortOrder, setSortOrder] = useState("");
	const [selectedPlatform, setSelectedPlatform] = useState<any>();
	const [selectedPlatformName, setSelectedPlatformName] = useState("");
	const [searchValue, setSearchValue] = useState("");

	const selectedID = selectedPlatform ? selectedPlatform : 1;

	const nextPage = () => {
		setPageNo(pageNo + 1);
	};
	const previousPage = () => {
		setPageNo(pageNo - 1);
	};

	return (
		<div className="container-fluid p-md-4">
			<header className="row">
				<div className="col">
					<NavBar onSearch={(value: string) => setSearchValue(value)} />
				</div>
			</header>
			<div className="row mt-5">
				<aside className="col-12 d-none d-md-block col-md-3">
					<GenreCard
						onSelectGenre={(id: number) => setSelectedGenre(id)}
						showGenre={(genre: string) => setGenreName(genre)}
						selectedGenre={selectedGenre}
						setPageNo={setPageNo}
					/>
				</aside>
				<main className="col-12 col-md">
					<h1 className="mb-4 text-center text-sm-start heading">
						{selectedPlatformName} {genre} Games
					</h1>

					<div className="mb-4 d-flex justify-content-center justify-content-sm-start">
						<div className="me-2">
							<GameFilter
								selectedPlatform={selectedPlatform}
								onSelectPlatform={(platform: number) => {
									setSelectedPlatform(platform);
								}}
								onSelectPlatformName={(platform: string) => {
									setSelectedPlatformName(platform);
								}}
							/>
						</div>
						<div>
							<SortSelector onSortOrder={(order: string) => setSortOrder(order)} sortOrder={sortOrder} />
						</div>
					</div>

					<GameGrid
						pageNo={pageNo}
						selectedGenre={selectedGenre}
						selectedPlatform={selectedID}
						nextPage={nextPage}
						previousPage={previousPage}
						genre={genre}
						sortOrder={sortOrder}
						searchValue={searchValue}
					/>
				</main>
			</div>
		</div>
	);
};

export default App;

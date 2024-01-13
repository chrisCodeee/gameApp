import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreCard from "./components/GenreCard/GenreCard";
import NavBar from "./components/NavBar";
import NextPage from "./components/Page";

const App = () => {
	const [pageNo, setPageNo] = useState(1);
	const [selectedGenre, setSelectedGenre] = useState<any>(null);
	const [genre, setGenreName] = useState<any>(null);

	const nextPage = () => {
		setPageNo(pageNo + 1);
	};
	const previousPage = () => {
		setPageNo(pageNo - 1);
	};
	return (
		<div className="container-fluid p-md-4">
			<header className="row">
				<nav className="col">
					<NavBar />
				</nav>
			</header>
			<div className="row mt-5">
				<aside className="col-12 d-none d-md-block col-md-2">
					<GenreCard onSelectGenre={(id: number) => setSelectedGenre(id)} showGenre={(genre: string) => setGenreName(genre)} />
				</aside>
				<main className="col-12 col-md">
					<NextPage nextPage={nextPage} previousPage={previousPage} pageNo={pageNo} genreName={genre} />
					<GameGrid pageNo={pageNo} selectedGenre={selectedGenre} />
					<NextPage nextPage={nextPage} previousPage={previousPage} pageNo={pageNo} genreName={genre} />
				</main>
			</div>
		</div>
	);
};

export default App;

import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreCard from "./components/GenreCard/GenreCard";
import NavBar from "./components/NavBar";
import NextPage from "./components/Page";

const App = () => {
	const [pageNo, setPageNo] = useState(1);

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
					<GenreCard />
				</aside>
				<main className="col-12 col-md">
					<NextPage nextPage={nextPage} previousPage={previousPage} pageNo={pageNo} />
					<GameGrid pageNo={pageNo} />
					<NextPage nextPage={nextPage} previousPage={previousPage} pageNo={pageNo} />
				</main>
			</div>
		</div>
	);
};

export default App;

import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";

const App = () => {
	return (
		<div className="container-fluid p-md-4">
			<header className="row">
				<nav className="col">
					<NavBar />
				</nav>
			</header>
			<div className="row">
				<aside className="col-12 d-none d-md-block col-md-2">Aside</aside>
				<main className="col-12 col-md">
					<GameGrid />
				</main>
			</div>
		</div>
	);
};

export default App;

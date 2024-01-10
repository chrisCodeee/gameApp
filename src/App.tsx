const App = () => {
	return (
		<div className="container-fluid bg-dark">
			<header className="row">
				<nav className="col bg-primary">Nav</nav>
			</header>
			<div className="row">
				<aside className="col-12 d-none d-md-block col-md-2 bg-info">Aside</aside>
				<main className="col-12 col-md bg-secondary">Main</main>
			</div>
		</div>
	);
};

export default App;

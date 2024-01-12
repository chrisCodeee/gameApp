const Spinner = () => {
	return (
		<div className="text-center">
			<div className="spinner-border text-primary" role="status" style={{ width: "30px", height: "30px" }}>
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
};

export default Spinner;

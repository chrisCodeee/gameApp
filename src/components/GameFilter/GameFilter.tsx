import usePlatforms from "../../hooks/usePlatform";

const GameFilter = () => {
	const { data, error } = usePlatforms();
	if (error) return null;
	return (
		<>
			<select name="" id="" className="mb-5 p-2" style={{ color: "#efefef", backgroundColor: "rgb(32, 32, 32)", borderRadius: "5px" }}>
				<option value="">All Platforms</option>
				{data.map((platform) => (
					<option key={platform.id} value={platform.name}>
						<p>{platform.name}</p>
					</option>
				))}
			</select>
		</>
	);
};

export default GameFilter;

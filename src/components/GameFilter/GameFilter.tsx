import usePlatforms from "../../hooks/usePlatform";
interface Props {
	onSelectPlatform: (platform: any) => void;
	onSelectPlatformName: (platform: any) => void;
	selectedPlatform?: number;
}

const GameFilter = ({ onSelectPlatform, onSelectPlatformName, selectedPlatform }: Props) => {
	const { data, error } = usePlatforms();
	if (error) return null;

	const platformName = data.find((name) => name.id === selectedPlatform);
	console.log(platformName);

	return (
		<>
			<select
				name="filter"
				className="me-4 d-block mb-5 mb-sm-0 p-2"
				style={{ color: "#efefef", backgroundColor: "rgb(32, 32, 32)", borderRadius: "5px" }}
				onChange={(e) => {
					onSelectPlatform(parseInt(e.target.value));
					onSelectPlatformName(platformName?.name);
				}}>
				<option value="">All Platforms</option>
				{data.map((platform) => (
					<option key={platform.id} value={platform.id}>
						{platform.name}
					</option>
				))}
			</select>
		</>
	);
};

export default GameFilter;

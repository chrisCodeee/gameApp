import { Game } from "../../hooks/useGames";
import { Icon } from "./PlatformIconListStyle";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface Props {
	game: Game;
}
const PlatformIconList = ({ game }: Props) => {
	let iconName = [
		{ name: "PC", icon: <FaWindows /> },
		{ name: "PlayStation", icon: <FaPlaystation /> },
		{ name: "Xbox", icon: <FaXbox /> },
		{ name: "Apple Macintosh", icon: <MdPhoneIphone /> },
		{ name: "Nintendo", icon: <SiNintendo /> },
		{ name: "Linux", icon: <FaLinux /> },
		{ name: "Android", icon: <FaAndroid /> },
		{ name: "iOS", icon: <FaApple /> },
		{ name: "Web", icon: <BsGlobe /> },
	];
	return (
		<div>
			{game.parent_platforms.map(({ platform }) => iconName.map((icon) => platform.name === icon.name && <Icon key={platform.id}>{icon.icon}</Icon>))}
		</div>
	);
};

export default PlatformIconList;

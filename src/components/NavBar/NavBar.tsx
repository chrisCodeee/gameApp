import { InputContainer, ListItem, LogoContainer, LogoText, Nav } from "./NavBarStyles";
// import logo from "../../assets/react.svg";
import Toggle from "../Toggle/Toggle";
import SearchGame from "../SearchGames";
import { BsSearch } from "react-icons/bs";
interface Props {
	onSearch: (value: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
	return (
		<Nav>
			<LogoContainer>
				{/* <Logo src={logo} /> */}
				<LogoText>Logo</LogoText>
			</LogoContainer>
			<InputContainer>
				<div style={{ transform: "translate(30px, -2px)" }}>
					<BsSearch />
				</div>
				<SearchGame onSearch={onSearch} />
			</InputContainer>
			<ListItem>
				<Toggle />
			</ListItem>
		</Nav>
	);
};

export default NavBar;

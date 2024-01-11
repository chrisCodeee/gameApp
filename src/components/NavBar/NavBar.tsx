import { ListItem, Logo, LogoContainer, LogoText, Nav } from "./NavBarStyles";
import logo from "../../assets/react.svg";
import Toggle from "../Toggle/Toggle";

const NavBar = () => {
	return (
		<Nav>
			<LogoContainer>
				<Logo src={logo} />
				<LogoText>Logo</LogoText>
			</LogoContainer>
			<ListItem>
				<Toggle />
			</ListItem>
		</Nav>
	);
};

export default NavBar;

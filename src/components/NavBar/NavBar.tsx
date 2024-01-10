import { ListItem, Logo, LogoContainer, LogoText, Nav } from "./NavBarStyles";
import logo from "../../assets/react.svg";

const NavBar = () => {
	return (
		<Nav>
			<LogoContainer>
				<Logo src={logo} />
				<LogoText>Logo</LogoText>
			</LogoContainer>
			<ListItem>Links</ListItem>
		</Nav>
	);
};

export default NavBar;

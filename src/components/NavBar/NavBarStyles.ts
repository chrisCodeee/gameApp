import styled from "styled-components";
import { flex } from "../../Variables/Utilities";

const Nav = styled.nav`
	list-style: none;
	// padding: 1.5rem 0;
	margin-bottom: 2rem;
	// color: #fff;
	${flex};
`;

const ListItem = styled.li``;

const LogoContainer = styled.div`
	${flex}
`;

const Logo = styled.img`
	width: 60px;
	object-fit: cover;
`;

const LogoText = styled.h1`
	margin-left: 1rem;
`;

export { Nav, ListItem, Logo, LogoText, LogoContainer };

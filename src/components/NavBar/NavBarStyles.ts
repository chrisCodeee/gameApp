import styled from "styled-components";
import { flex } from "../../Variables/Utilities";

const Nav = styled.nav`
	list-style: none;
	// padding: 1.5rem 0;
	margin-bottom: 1rem;
	// color: #fff;
	${flex};
	// justify-content: none;
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
	// margin-left: 1rem;
`;

const InputContainer = styled.div`
	width: 75%;
	display: flex;
	align-items: center;

	@media screen and (max-width: 850px) {
		width: 70%;
	}
	@media screen and (max-width: 650px) {
		width: 65%;
	}
	@media screen and (max-width: 577px) {
		width: 75%;
	}
	@media screen and (max-width: 390px) {
		width: 60%;
	}
	@media screen and (max-width: 260px) {
		width: 40%;
	}
`;

export { Nav, ListItem, Logo, LogoText, LogoContainer, InputContainer };

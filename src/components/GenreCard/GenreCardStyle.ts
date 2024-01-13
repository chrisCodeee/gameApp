import styled from "styled-components";

const Button = styled.button`
	border: 0;
	outline: 0;
	background-color: transparent;
	color: inherit;
	cursor: pointer;

	& span {
		// padding-bottom: 20px;
	}

	&:hover span {
		border-bottom: 1px solid white;
	}
`;
export { Button };

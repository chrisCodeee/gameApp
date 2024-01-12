import styled from "styled-components";

const Icon = styled.i`
	font-size: 1.4rem;
	&:not(:last-child) {
		margin-right: 5px;
	}

	& svg {
		fill: gray;
	}
`;

export { Icon };

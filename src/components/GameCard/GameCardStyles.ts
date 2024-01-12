import styled from "styled-components";

const Container = styled.div`
	border-radius: 10px;
	overflow: hidden;
	background-color: rgb(32, 32, 32);
	color: #efefef;
	cursor: pointer;
	transition: all 0.5s;

	&:hover {
		transform: scale(1.1);
	}
	&:hover img {
		transform: scale(1);
	}
`;

const CardImage = styled.img`
	transform: scale(1.1);
	transition: all 0.5s;
`;

const CardImageContainer = styled.div`
	overflow: hidden;
`;

const CardBody = styled.div`
	margin-top: 3rem;
`;

const IconContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-item: center;
`;

const CardHeading = styled.h2``;

export { Container, CardHeading, CardBody, CardImage, CardImageContainer, IconContainer };

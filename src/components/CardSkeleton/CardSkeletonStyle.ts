import styled from "styled-components";

const SkeletonContainer = styled.div`
	background-color: rgb(32, 32, 32);
	height: 30rem;
	border-radius: 10px;
	overflow: hidden;
`;

const SkeletonImage = styled.div`
	background-color: gray;
	height: 14rem;
	margin-bottom: 30px;
`;

const SkeletonHeading = styled.h1`
	max-width: 150px;
	height: 10px;
	border-radius: 4px;
	background-color: gray;
`;
const SkeletonIconContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-item: center;
`;
const SkeletonIcon = styled.div`
	background-color: gray;
	border-radius: 4px;
	flex-basis: 70%;
	height: 30px;
`;

const SkeletonBadge = styled.p`
	border-radius: 4px;
	padding: 0 2rem;
	background-color: gray;
	height: 26px;
`;
export { SkeletonContainer, SkeletonImage, SkeletonHeading, SkeletonIcon, SkeletonIconContainer, SkeletonBadge };

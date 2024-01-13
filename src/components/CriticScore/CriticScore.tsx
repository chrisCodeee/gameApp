import styled from "styled-components";

interface Props {
	score: number;
}

const Badge = styled.p`
	padding: 0.2rem 1rem;
	border-radius: 4px;
	font-size: 1.4rem;
	align-self: center;
`;

const CriticScore = ({ score }: Props) => {
	let backgroundColor = score > 75 ? "green" : score > 60 ? "yellow" : "rgba(0, 242, 255, 0.451)";
	let color = score <= 75 ? "black" : "white";
	let criticScore = score ? score : " ---";
	return <Badge style={{ backgroundColor: backgroundColor, color: color }}>{criticScore}</Badge>;
};

export default CriticScore;

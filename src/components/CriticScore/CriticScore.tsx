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
	let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
	return <Badge style={{ backgroundColor: color }}>{score}</Badge>;
};

export default CriticScore;

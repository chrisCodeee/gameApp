import { SkeletonBadge, SkeletonIcon, SkeletonContainer, SkeletonHeading, SkeletonIconContainer, SkeletonImage } from "./CardSkeletonStyle";

const CardSkeleton = () => {
	return (
		<SkeletonContainer>
			<SkeletonImage></SkeletonImage>
			<div className="p-4">
				<SkeletonHeading></SkeletonHeading>
				<SkeletonIconContainer>
					<SkeletonIcon></SkeletonIcon>
					<SkeletonBadge></SkeletonBadge>
				</SkeletonIconContainer>
			</div>
		</SkeletonContainer>
	);
};

export default CardSkeleton;

interface Props {
	nextPage: () => void;
	previousPage: () => void;
	pageNo: number;
}
const NextPage = ({ nextPage, previousPage, pageNo }: Props) => {
	return (
		<div className="my-4">
			<button disabled={pageNo < 2} className="btn btn-info me-3 fs-3" onClick={previousPage}>
				Previous
			</button>
			<button className="btn btn-info fs-3" onClick={nextPage}>
				Next
			</button>
		</div>
	);
};

export default NextPage;

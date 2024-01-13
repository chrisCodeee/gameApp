interface Props {
	nextPage: () => void;
	previousPage: () => void;
	pageNo: number;
	genreName: string;
}
const NextPage = ({ nextPage, previousPage, pageNo, genreName }: Props) => {
	return (
		<div className="my-4 d-flex flex-column flex-sm-row">
			<div>
				<button disabled={pageNo < 2} className="btn btn-info me-3 fs-3" onClick={previousPage}>
					Previous
				</button>
				<button className="btn btn-info fs-3" onClick={nextPage}>
					Next
				</button>
			</div>
			{genreName && (
				<p className="ms-sm-4">
					Page {pageNo} of {genreName}
				</p>
			)}
		</div>
	);
};

export default NextPage;

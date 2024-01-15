interface Props {
	onSortOrder: (order: string) => void;
	sortOrder: string;
}
const SortSelector = ({ onSortOrder, sortOrder }: Props) => {
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release Date" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-rating", label: "Average rating" },
	];

	const orderValue = sortOrders.find((order) => order.value === sortOrder);
	return (
		<>
			<select
				name="select"
				style={{ color: "#efefef", backgroundColor: "rgb(32, 32, 32)", borderRadius: "5px", marginRight: "10px" }}
				onChange={(e) => onSortOrder(e.target.value)}>
				{/* <option value='' selected>{`Sort order by: ${orderValue?.label}`}</option> */}
				{sortOrders.map((order) => (
					<option key={order.value} value={order.value}>
						{order.label}
					</option>
				))}
			</select>
			<p>{`Order by: ${orderValue?.label}`}</p>
		</>
	);
};

export default SortSelector;

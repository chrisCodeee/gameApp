import { SearchInput } from "./SearchGameStyle";

interface Props {
	onSearch: (value: string) => void;
}
const SearchGame = ({ onSearch }: Props) => {
	// console.log(document);

	return (
		<>
			<SearchInput
				name="search"
				type="search"
				placeholder="Search games here..."
				onChange={(e) => {
					onSearch(e.target.value);
				}}
			/>
		</>
	);
};

export default SearchGame;

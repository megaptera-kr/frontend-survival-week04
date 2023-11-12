import Stack from './atoms/Stack';

type FilterableMenuSearchProps = {
  htmlFor: string;
  placeholder: string;
  searchText: string;
  handleChangeSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FilterableMenuSearch({
  htmlFor,
  placeholder,
  searchText,
  handleChangeSearchText,
}: FilterableMenuSearchProps) {
  return (
    <Stack id="filterable-menu-search-container" type="row">
      <label htmlFor={htmlFor}>검색</label>
      <input
        type="text"
        id={htmlFor}
        placeholder={placeholder}
        value={searchText}
        onChange={handleChangeSearchText}
      />
    </Stack>
  );
}

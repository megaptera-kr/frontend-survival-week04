interface SearchBarProps {
  handleChangeSearchValue: (value: string) => void
  handleSearch: () => void
}

function SearchBar({ handleChangeSearchValue, handleSearch }: SearchBarProps) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    handleChangeSearchValue(input.value);
  };
  return (
    <div>
      <input type="text" onChange={onChange} placeholder="검색" />
      <button type="button" onClick={handleSearch}>검색</button>
    </div>
  );
}
export default SearchBar;

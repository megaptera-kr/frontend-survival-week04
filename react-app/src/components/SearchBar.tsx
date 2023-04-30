interface SearchBarProps{
  filterText: string;
  setFilterText: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({
  filterText, setFilterText,
}: SearchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <div>
      <label
        style={{
          display: 'inline-block',
          paddingRight: '10px',
        }}
        htmlFor="검색"
      >
        검색
      </label>
      <input
        type="text"
        name="검색"
        placeholder="식당 이름"
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;

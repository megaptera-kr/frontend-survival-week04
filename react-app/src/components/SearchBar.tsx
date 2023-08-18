type SearchBarProps = {
  setFilterText: (value: string) => void;
};

export default function SearchBar({ setFilterText }: SearchBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterText(e.target.value);
  };

  return (
    <label htmlFor="search-input">
      검색
      <input
        id="search-input"
        type="text"
        placeholder="식당 이름"
        onChange={handleChange}
      />
    </label>
  );
}

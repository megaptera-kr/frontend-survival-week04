type SearchBarProps = {
  categories: string[];
  setFilterText: (value: string) => void;
  setFilterCategory: (value: string) => void;
}

export default function SearchBar({
  categories,
  setFilterText,
  setFilterCategory,
}: SearchBarProps) {
  const handleChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleClick = (e) => {
    setFilterCategory(e.target.innerText);
  };

  return (
    <>
      <div>
        <label htmlFor="filterTextInput">검색</label>
        <input
          id="filterTextInput"
          type="text"
          placeholder="식당 이름"
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="button" onClick={handleClick}>전체</button>
        {categories.map((category: string) => (
          <button
            key={category}
            type="button"
            onClick={handleClick}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
}

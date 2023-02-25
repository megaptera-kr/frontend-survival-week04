type SearchBarProps = {
  categories: string[];
  filterText: string;
  setFilterText: (value:string) => void;
  setCategory: (value:string) => void;
}

export default function SearchBar({
  categories, filterText, setFilterText, setCategory,
} : SearchBarProps) {
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    setCategory(e.currentTarget.value);
  };
  return (
    <div>
      <label htmlFor="search">검색</label>
      <input placeholder="식당이름" id="search" value={filterText} onChange={handleChange} />
      <div>
        {
          categories.map((category) => (
            <button type="button" key={category} value={category} onClick={handleClick}>{category}</button>
          ))
        }
      </div>
    </div>
  );
}

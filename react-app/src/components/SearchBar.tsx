type SearchBarType = {
  label: string;
  placeholder: string;
  filterText: string; setFilterText: (value:string) => void;
}

export default function SearchBar({
  label, placeholder, filterText, setFilterText,
}: SearchBarType) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <div className="SearchBar">
      <label htmlFor="searchInput" className="SearchBar-label">
        {label}
      </label>
      <input type="text" placeholder={placeholder} id="searchInput" value={filterText} onChange={handleChange} />
    </div>
  );
}

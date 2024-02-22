import TextField from './TextField';

type SearchBarProps = {
  categories: string[];
  filterText: string;
  setFilterText: (value: string) => void;
  setFilterCategory: (value: string) => void;
};

export default function SearchBar({
  categories,
  filterText,
  setFilterText,
  setFilterCategory,
}: SearchBarProps) {
  return (
    <div className="SearchBar">
      <TextField filterText={filterText} setFilterText={setFilterText} />
      <ul className="Buttons">
        {['전체', ...categories].map((category: string) => (
          <li key={category}>
            <button type="button" onClick={() => setFilterCategory(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

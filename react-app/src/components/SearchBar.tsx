import TextField from './TextField';

type SearchBarProps = {
  categories: string[]
  filterText: string;
  setFilterText: (text: string) => void;
  setFilterCategory: (text: string) => void;
}

export default function SearchBar({
  categories, filterText, setFilterText, setFilterCategory,
}:SearchBarProps) {
  return (
    <div>
      <TextField
        label="검색"
        placeholder="식당 이름"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ul>
        {['전체', ...categories].map((category: string) => (
          <li
            key={category}
          >
            <button
              type="button"
              onClick={() => setFilterCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

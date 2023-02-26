import TextField from './TextField';

type SearchBarProps = {
  categories: string[];
  filterText: string;
  setFilterText: (text: string) => void;
  setCategory: (text: string) => void;
}

export default function SearchBar({
  categories, filterText, setFilterText, setCategory,
}: SearchBarProps) {
  return (
    <div>
      <TextField
        label="검색"
        placeholder="식당 이름"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ul style={{
        display: 'flex',
        padding: 0,
        listStyle: 'none',
      }}
      >
        {['전체', ...categories].map((category: string) => (
          <li key={category}>
            <button
              type="button"
              onClick={() => setCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

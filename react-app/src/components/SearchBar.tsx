import TextFieldInput from './TextFieldInput';

type SearchBarProps = {
  categories: string[];
  filterText: string;
  setFilterText: (value: string) => void;
  setFilterCategory: (value: string) => void;
};

function SearchBar({
  categories,
  setFilterCategory,
  filterText,
  setFilterText,
}: SearchBarProps) {
  return (
    <div>
      <TextFieldInput
        placeholder="식당 이름"
        label="검색"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        {['전체', ...categories].map((category) => (
          <li key={category}>
            <button
              type="button"
              style={{ marginRight: '10px' }}
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

export default SearchBar;

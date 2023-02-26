import TextField from './TextFiled';

type SearchbarProps = {
  categories: string[]
  filterText: string
  onChange: (value: string) => void
  onClickFilterButton: (value: string) => void
}

function Searchbar({
  categories,
  filterText,
  onChange,
  onClickFilterButton,
}: SearchbarProps) {
  return (
    <div className="search-bar">
      <TextField
        label="검색"
        placeholder="식당이름"
        filterText={filterText}
        onChange={onChange}
      />
      <ul>
        {['전체', ...categories].map((category) => (
          <li key={category}>
            <button
              type="button"
              onClick={() => onClickFilterButton(category)}
            >
              {category}

            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Searchbar;

type FilterableMenuSearchProps = {
  htmlFor: string;
  placeholder: string;
  searchText: string;
  handleChangeSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FilterableMenuSearch({
  htmlFor,
  placeholder,
  searchText,
  handleChangeSearchText,
}: FilterableMenuSearchProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '16px',
      }}
    >
      <label htmlFor={htmlFor}>검색</label>
      <input
        id={htmlFor}
        placeholder={placeholder}
        value={searchText}
        onChange={handleChangeSearchText}
      />
    </div>
  );
}

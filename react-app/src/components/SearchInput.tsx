interface SearchInputProps {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ handleSearch }:SearchInputProps) {
  return (
    <label style={{ display: 'flex', gap: '0.5rem', margin: '1rem 0' }}>
      검색
      <input placeholder="식당 이름" onChange={handleSearch} maxLength={20} />
    </label>
  );
}

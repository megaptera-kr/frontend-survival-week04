type SearchBarProp = {
  keyword: string;
  setKeyword: (value: string) => void;
};

export default function SearchBar({ keyword, setKeyword }: SearchBarProp) {
  return (
    <div>
      <label htmlFor="input-검색" style={{ paddingRight: '1rem' }}>
        검색
      </label>
      <input
        id="input-검색"
        type="text"
        placeholder="식당 이름"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
}

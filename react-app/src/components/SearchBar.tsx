import SearchInput from './SearchInput';

type PropTypes = {
  onChange: (val: string) => void;
  value: string;
};

export default function SearchBar({ value, onChange }: PropTypes) {
  return (
    <div>
      <SearchInput
        onChange={onChange}
        inputValue={value}
        placeholder="식당 이름"
        labelString="검색"
      />
    </div>
  );
}

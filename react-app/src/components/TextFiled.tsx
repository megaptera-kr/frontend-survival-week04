import { FilterTextState } from '../types';

type Props = {
  placeholder: string;
} & FilterTextState;

export default function TextFiled({
  filterText,
  setFilterText,
  placeholder,
}:Props) {
  return (
    <div className="w-full flex items-center">
      <label
        className="text-xl w-10"
        htmlFor="search-input"
      >
        검색
      </label>
      <input
        id="search-input"
        className="ml-2 rounded px-2 text-xl border-2 border-purple-400
        focus:outline-none focus:border-purple-500 w-full"
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={
          (e: React.ChangeEvent<HTMLInputElement>) => (
            setFilterText(e.target.value)
          )
        }
      />
    </div>
  );
}

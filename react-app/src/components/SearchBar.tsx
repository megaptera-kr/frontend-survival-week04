import { FilterTextState } from '../types';
import CategoryButtons from './CategoryButtons';
import TextFiled from './TextFiled';

type Props = {
  setSelectCategory: (value: string) => void;
} & FilterTextState

export default function SearchBar({
  filterText,
  setFilterText,
  setSelectCategory,
}:Props) {
  return (
    <div className="h-24 flex flex-col justify-between items-center mb-6 w-1/2">
      <TextFiled
        filterText={filterText}
        setFilterText={setFilterText}
        placeholder="식당 이름"
      />
      <CategoryButtons
        setSelectCategory={setSelectCategory}
      />
    </div>
  );
}

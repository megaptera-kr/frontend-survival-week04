import Restaurant from '../types/Restaurant';
import ButtonField from './ButtonField';
import TextField from './TextField';

type FilterFieldProps = {
  restaurants: Restaurant[]
  filterText: string
  setFilterText: (value: string) => void
  setFilterCategory: (value: string) => void
}

export default function FilterField({
  restaurants,
  filterText,
  setFilterText,
  setFilterCategory,
}: FilterFieldProps) {
  return (
    <div>
      <TextField
        labelText="검색"
        placeholder="식당 이름"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ButtonField restaurants={restaurants} setFilterCategory={setFilterCategory} />
    </div>
  );
}

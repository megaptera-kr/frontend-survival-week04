import type { KioskFilter } from '../types/kiosk';
import Input from './Input';
import SelectableList from './SelectableList';
import RadioButton from './RadioButton';

interface SearchFilterProps {
  categories: string[];
  filter: KioskFilter;
  onChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchFilter({
  categories,
  filter,
  onChangeFilter,
}: SearchFilterProps) {
  return (
    <section>
      <h2>키오스크 검색창</h2>
      <Input
        id="kiosk-search"
        label="검색"
        name="searchText"
        value={filter.searchText}
        onChange={onChangeFilter}
      />
      <SelectableList
        items={categories}
        renderItem={(item) => (
          <RadioButton
            key={item}
            id={item}
            name="category"
            checked={item === filter.category}
            value={item}
            onChange={onChangeFilter}
          />
        )}
      />
    </section>
  );
}

import CategoriesFilter from './CategoriesFilter';

import TextField from './TextField';

import { Cart } from '../types/cart';

type FilterableRestaurantProps = {
  categories: string[];
  filterText: string;
  setFilterText: (value: string) => void;
  setFilterCategoryText: (value: string) => void;
}

export default function FilterableRestaurant({
  categories, filterText, setFilterText, setFilterCategoryText,
}: FilterableRestaurantProps) {
  return (
    <div>
      <TextField
        placeholder="식당 이름"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <CategoriesFilter
        categories={categories}
        setFilterCategoryText={setFilterCategoryText}
      />
    </div>
  );
}

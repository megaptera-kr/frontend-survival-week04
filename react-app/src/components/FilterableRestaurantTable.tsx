import { useState } from 'react';

import SearchAndFilter from './SearchAndFilter';
import RestaurantTable from './RestaurantTable';

import { MenuItem } from '../types/MenuItem';

import useFetchRestarants from '../hooks/useFetchRestarants';

import categoryExtraction from '../utils/categoryExtraction';
import filterRestaurants from '../utils/filterRestaurants';
import filterCategories from '../utils/filterCategories';

type FilterableRestaurantTableProps = {
  handleSelectMenu: (orders: MenuItem) => void;
};

export default function FilterableRestaurantTable({
  handleSelectMenu,
}: FilterableRestaurantTableProps) {
  const [query, setQuery] = useState<string>('');
  const [category, setCategory] = useState<string>('전체');

  const [restaurants] = useFetchRestarants();

  const categories = categoryExtraction({ restaurants });
  const filteredRestaurants = filterRestaurants({ query, restaurants });
  const filteredCategories = filterCategories({
    category,
    filteredRestaurants,
  });

  return (
    <div>
      <SearchAndFilter
        query={query}
        setQuery={setQuery}
        categories={categories}
        setCategory={setCategory}
      />
      <RestaurantTable
        filteredCategories={filteredCategories}
        handleSelectMenu={handleSelectMenu}
      />
    </div>
  );
}

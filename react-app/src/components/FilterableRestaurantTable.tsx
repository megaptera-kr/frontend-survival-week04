import { useState } from 'react';

import filterRestaurants from '../utils/filterRestaurants';
import selectCategory from '../utils/selectCategory';

import RestaurantsTable from './RestaurantsTable';
import SearchBar from './SearchBar';

import Restaurant from '../types/Restaurants';
import Menu from '../types/Menu';

type FilterableRestaurantTableProps = {
    restaurants : Restaurant[];
    cart: Menu[];
    setCart: (value:Menu[]) => void;
}

export default function FilterableRestaurantTable({
  restaurants, cart, setCart,
}: FilterableRestaurantTableProps) {
  const [category, setCategory] = useState<string>('전체');
  const [filterText, setFilterText] = useState<string>('');
  const filteredrestaurants = filterRestaurants(restaurants, { category, filterText });
  const categories = ['전체', ...selectCategory(restaurants)];

  return (
    <>
      <SearchBar
        setCategory={setCategory}
        filterText={filterText}
        setFilterText={setFilterText}
        categories={categories}
      />
      <RestaurantsTable
        restaurants={filteredrestaurants}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
}

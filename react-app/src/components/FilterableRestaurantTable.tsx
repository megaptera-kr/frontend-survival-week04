import { useState } from 'react';

import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

import Restaurant from '../types/Restaurant';
import MenuItem from '../types/MenuItem';

import filterRestaurants from '../utils/filterRestaurants';

type FilterableRestaurantTableProps = {
    restaurants: Restaurant[];
    setCartItems: React.Dispatch<React.SetStateAction<MenuItem[]>>
    cartItems: MenuItem[];
  }

export default function FilterableRestaurantTable({
  restaurants,
  setCartItems,
  cartItems,
}: FilterableRestaurantTableProps) {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });

  return (
    <div className="filterable-restaurant-table">
      <SearchBar
        restaurants={restaurants}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable
        restaurants={filteredRestaurants}
        setCartItems={setCartItems}
        cartItems={cartItems}
      />
    </div>
  );
}

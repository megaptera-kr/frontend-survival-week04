import { useState } from 'react';
import SearchBar from './SearchBar';
import Categories from './Categories';
import MenuTable from './MenuTable';

import type { Restaurants } from '../types/types';
import filterRestaurants from '../utils/filterRestaurant';

export default function MenuChoose({ restaurants }: {restaurants: Restaurants[]}) {
  const [category, setCategory] = useState('전체');
  const [filterText, setFilterText] = useState('');
  const categoryList = restaurants.reduce((acc: string[], cur: Restaurants) => (
    acc?.includes(cur.category) ? acc : [...acc, cur.category]), ['전체']);
  const filterProducts = filterRestaurants(restaurants, { filterText, category });

  return (
    <div className="MenuChoose">
      <SearchBar label="검색" placeholder="식당 이름" filterText={filterText} setFilterText={setFilterText} />
      <Categories categoryList={categoryList} onClick={setCategory} />
      <MenuTable restaurants={filterProducts} />
    </div>
  );
}

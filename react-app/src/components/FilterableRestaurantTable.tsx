import { useState } from 'react';

import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

export default function FilterableRestaurantTable() {
  // 검색어
  const [filterText, setFilterText] = useState<string>('');
  // 카테고리
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  return (
    <div>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable
        filterText={filterText}
        filterCategory={filterCategory}
      />
    </div>
  );
}

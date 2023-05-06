import { useState } from 'react';
import useRestaurants from '../hooks/useRestaurants';
import filterRestaurants from '../utils/filterRestaurants';
import FilterTable from './FilterTable';
import RestaurantTable from './RestaurantTable';

export default function FilteredRestaurantContainer() {
  const [category, setCategory] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');

  const restaurants = useRestaurants();
  const filteredRestaurants = filterRestaurants(restaurants, {
    category,
    keyword,
  });

  return (
    <div style={{ width: '50%', float: 'left' }}>
      <h2>식당 목록</h2>
      <FilterTable
        keyword={keyword}
        setKeyword={setKeyword}
        category={category}
        setCategory={setCategory}
      />
      <RestaurantTable
        restaurants={filteredRestaurants}
      />
    </div>
  );
}

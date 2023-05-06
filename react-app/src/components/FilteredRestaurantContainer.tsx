import { useEffect, useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';
import useRestaurants from '../hooks/useRestaurants';
import filterRestaurants from '../utils/filterRestaurants';
import FilterTable from './FilterTable';
import RestaurantTable from './RestaurantTable';

export default function FilteredRestaurantContainer() {
  const { restaurants, setRestaurants } = useRestaurants();
  const [category, setCategory] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');

  useEffectOnce(() => {
    // filter restaurants
    setRestaurants(
      filterRestaurants(restaurants, {
        category,
        keyword,
      }),
    );
  });

  return (
    <div style={{ width: '50%', float: 'left' }}>
      <h2>식당 목록</h2>
      <FilterTable />
      <RestaurantTable
        restaurants={restaurants}
      />
    </div>
  );
}

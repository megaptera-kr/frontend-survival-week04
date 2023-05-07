import { useState } from 'react';
import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import filterData from '../utils/filterData';

export default function FilterableTable() {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const restaurants = useFetchRestaurants();

  const categories = restaurants.reduce((acc, restaurant) => {
    const { category } = restaurant;
    return acc.includes(category) ? acc : [...acc, category];
  }, []);

  const filteredRestaurants = filterData(restaurants, { filterText, filterCategory });

  return (
    <>
      <SearchBar
        categories={categories}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable
        restaurants={filteredRestaurants}
      />
    </>
  );
}

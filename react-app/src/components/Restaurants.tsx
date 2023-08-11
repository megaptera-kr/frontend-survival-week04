import { useState } from 'react';

import ShoppingCart from './ShoppingCart';
import SearchBar from './SearchBar';
import RestaurantsTable from './RestaurantsTable';

import useFetchRestaurants from '../hooks/useFetchRestaurants';
import Receipts from './Receipts';
import filterRestaurants from '../utils/filterRestaurants';

export default function Restaurants() {
  const [query, setQuery] = useState('');
  const [foodType, setFoodType] = useState('전체');

  const { restaurants } = useFetchRestaurants();
  const filteredRestaurants = filterRestaurants(restaurants, foodType);

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <ShoppingCart />
      <SearchBar
        restaurants={restaurants}
        {...{
          query, setQuery, foodType, setFoodType,
        }}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
      <Receipts />
    </div>
  );
}

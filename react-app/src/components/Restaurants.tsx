import { useState } from 'react';
import { useInterval } from 'usehooks-ts';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

import ShoppingCart from './ShoppingCart';
import SearchBar from './SearchBar';
import RestaurantsTable from './RestaurantsTable';
import Receipts from './Receipts';

import filterRestaurants from '../utils/filterRestaurants';
import { ResOrders } from '../types/restaurants';

export default function Restaurants() {
  const [query, setQuery] = useState('');
  const [foodType, setFoodType] = useState('전체');
  const [orders, setOrders] = useState<ResOrders>({ id: '', menu: [], totalPrice: 0 });

  const restaurants = useFetchRestaurants();

  const filteredRestaurants = filterRestaurants(restaurants, { query, foodType });

  useInterval(() => {
    setOrders({ id: '', menu: [], totalPrice: 0 });
  }, 5000);

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <ShoppingCart setOrders={setOrders} />
      <SearchBar
        restaurants={restaurants}
        {...{
          query, setQuery, foodType, setFoodType,
        }}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
      <Receipts orders={orders} />
    </div>
  );
}

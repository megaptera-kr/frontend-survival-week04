import { useState } from 'react';

import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

import useFetchRestaurant from '../hooks/useFetchRestaurant';

import selectCategories from '../utils/selectCategories';
import filterRestaurants from '../utils/filterRestaurants';

export default function FoodCourtTable() {
  const restaurants = useFetchRestaurant();

  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');

  const [choiceFoods, setChoiceFoods] = useState([]);

  const filterCategories = selectCategories(restaurants);
  const filteredRestaurants = filterRestaurants(restaurants, {
    filterText,
    filterCategory,
  });

  return (
    <>
      <div className="Cart">
        <h2>점심바구니</h2>
        <ul>
          <li>
            <span>짜장면(8,000원)</span>
            <button type="button">취소</button>
          </li>
        </ul>
        <div>
          <button type="button">합계 0000원 주문</button>
        </div>
      </div>
      <SearchBar
        categories={filterCategories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable
        restaurants={filteredRestaurants}
        setChoiceFoods={setChoiceFoods}
      />
    </>
  );
}

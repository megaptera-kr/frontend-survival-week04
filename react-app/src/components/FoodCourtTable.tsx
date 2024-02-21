import { useEffect, useState } from 'react';

import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

import Restaurant from '../Types/Restaurant';

export default function FoodCourtTable() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const FetchRestaurant = async () => {
      const response = await fetch('http://localhost:3000/restaurants');
      const data = await response.json();
      setRestaurants(data.restaurants);
    };

    FetchRestaurant();
  }, []);

  return (
    <>
      <div className="Cart">
        <h2>점심바구니</h2>
        <ul>
          <li>
            <span>짜장면(8,000원)</span>
            <button type="button">취소</button>
          </li>
          <li>
            <span>짜장면(8,000원)</span>
            <button type="button">취소</button>
          </li>
        </ul>
        <div>
          <button type="button">합계 0000원 주문</button>
        </div>
      </div>
      <SearchBar />
      <RestaurantTable restaurants={restaurants} />
    </>
  );
}

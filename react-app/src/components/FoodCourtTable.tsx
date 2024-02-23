import { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import Foods from './Foods';
import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

import useFetchRestaurant from '../hooks/useFetchRestaurant';

import selectCategories from '../utils/selectCategories';
import filterRestaurants from '../utils/filterRestaurants';
import totalPrice from '../utils/totalPrice';

export default function FoodCourtTable() {
  // 1. Fetch로 데이터 가져오기
  const restaurants = useFetchRestaurant();
  // 2. 검색어 입력시 state
  const [filterText, setFilterText] = useState('');
  // 3. 음식 종류 카테고리 버튼 state
  const [filterCategory, setFilterCategory] = useState('전체');
  // const [choiceFoods, setChoiceFoods] = useState([]);
  const [choiceFoods, setChoiceFoods] = useLocalStorage('cart', []);

  const filterCategories = selectCategories(restaurants);
  const filteredRestaurants = filterRestaurants(restaurants, {
    filterText,
    filterCategory,
  });

  const foodTotalPrice = totalPrice(choiceFoods);

  return (
    <>
      <div className="Cart">
        <h2> 🛒 점심바구니</h2>
        <Foods
          btnName="취소"
          menu={choiceFoods}
          choiceFoods={choiceFoods}
          setChoiceFoods={setChoiceFoods}
        />
        <div>
          {!choiceFoods.length ? (
            <p>점심바구니가 비어있어요! 음식을 선택해주세요!</p>
          ) : (
            <button type="button">{`합계 주문 ${foodTotalPrice.toLocaleString()}원!`}</button>
          )}
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
        choiceFoods={choiceFoods}
        setChoiceFoods={setChoiceFoods}
      />
    </>
  );
}

import { useState } from 'react';
import { useInterval, useLocalStorage } from 'usehooks-ts';

import Foods from './Foods';
import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';
import ReceiptTable from './ReceiptTable';

import useFetchRestaurant from '../hooks/useFetchRestaurant';

import selectCategories from '../utils/selectCategories';
import filterRestaurants from '../utils/filterRestaurants';
import totalPrice from '../utils/totalPrice';

import Receipt from '../Types/Receipt';
import Food from '../Types/Food';

const emptyReceipt = {} as Receipt;
const emptychoice = [] as Food[];

export default function FoodCourtTable() {
  // 1. Fetch로 데이터 가져오기
  const restaurants = useFetchRestaurant();
  // 2. 검색어 입력시 state
  const [filterText, setFilterText] = useState('');
  // 3. 음식 종류 카테고리 버튼 state
  const [filterCategory, setFilterCategory] = useState('전체');

  // 4. 선택된 음식 list state
  // const [choiceFoods, setChoiceFoods] = useState([]);
  const [choiceFoods, setChoiceFoods] = useLocalStorage('cart', emptychoice);

  // 5. 영수증 객체 state
  // const [receipt, setReceipt] = useState({});
  const [receipt, setReceipt] = useLocalStorage('receipt', emptyReceipt);

  const filterCategories = selectCategories(restaurants);
  const filteredRestaurants = filterRestaurants(restaurants, {
    filterText,
    filterCategory,
  });

  const foodTotalPrice = totalPrice(choiceFoods);

  useInterval(() => {
    if (receipt.id) {
      setReceipt(emptyReceipt);
    }
  }, 5000);

  const handleSubmitOrder = () => {
    if (!choiceFoods.length) {
      return;
    }

    const FetchRequest = async () => {
      const request = await fetch('http://localhost:3000/orders', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          menu: choiceFoods,
          totalPrice: foodTotalPrice,
        }),
      });

      const data = await request.json();
      setReceipt(data.receipt);
    };

    FetchRequest();
    setChoiceFoods([]);
  };

  return (
    <div className="App">
      <div className="Cart">
        <h2> 🛒 점심바구니</h2>
        <Foods
          btnName="취소"
          menu={choiceFoods}
          choiceFoods={choiceFoods}
          setChoiceFoods={setChoiceFoods}
        />
        <div>
          <button type="button" onClick={handleSubmitOrder}>
            {' 합계: '}
            {!choiceFoods.length ? 0 : foodTotalPrice.toLocaleString()}
            {'원 주문 '}
          </button>
        </div>
      </div>
      <div className="Restaurant">
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
      </div>
      <ReceiptTable receipts={receipt} />
    </div>
  );
}

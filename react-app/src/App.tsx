import { useState } from 'react';
import { useInterval, useLocalStorage } from 'usehooks-ts';
import SearchBar from './components/SearchBar';
import FliterCategory from './components/FliterCategory';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import Restaurant from './components/Restaurant';
import RestaurantType from './types/RestaurantType';
import Food from './types/Food';
import CartItem from './components/CartItem';
import ReceiptPrinter from './components/ReceiptPrinter';
import Receipt from './types/Receipt';

export default function App() {
  const [searchKeyWord, setSearchKeyWord] = useState<string>('');
  const [currentCategory, setCurrentCategory] = useState<string>('');
  const [receipt, setReceipt] = useState<Receipt | undefined>();
  const restaurants = useFetchRestaurants();
  const [selectedFoods, setSelectFood] = useLocalStorage<Food[]>('cart', []);

  const totalPrice = selectedFoods.reduce(
    (result, food) => result + food.price,
    0,
  );
  const onOrderHandler = async () => {
    if (!selectedFoods.length) {
      return;
    }

    const response = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu: selectedFoods, totalPrice }),
    });
    const { receipt: data } = await response.json();
    setReceipt(data);
    setSelectFood([]);
  };
  useInterval(
    () => {
      if (receipt?.id) {
        setReceipt(undefined);
      }
    },
    receipt?.id ? 5000 : null,
  );
  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <div style={{ marginBottom: '3rem' }}>
        <h2>점심 바구니</h2>
        <ul style={{ width: '20%' }}>
          {selectedFoods.map((food: Food, index: number) => (
            <CartItem
              key={`food${food.id + index}`}
              cartItemIndex={index}
              food={food}
            />
          ))}
        </ul>
        <button type="button" onClick={() => onOrderHandler()}>
          {`합계: ${totalPrice.toLocaleString()}원 주문`}
        </button>
      </div>
      <div>
        <div>
          <SearchBar keyword={searchKeyWord} setKeyword={setSearchKeyWord} />
          <FliterCategory
            restaurants={restaurants}
            setCurrentCategory={setCurrentCategory}
          />
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th style={{ paddingInline: '2rem' }}>식당 이름</th>
                <th>종류</th>
                <th>메뉴</th>
              </tr>
            </thead>
            <tbody>
              {restaurants
                .filter((restaurant: RestaurantType) => {
                  const isIncludedCategory = restaurant.category.includes(currentCategory);
                  const isIncludedName = restaurant.name.includes(
                    searchKeyWord.trim(),
                  );
                  return isIncludedCategory && isIncludedName;
                })
                .map((restaurant: RestaurantType, index: number) => (
                  <Restaurant
                    key={`restaurant${restaurant.id + index}`}
                    restaurant={restaurant}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <ReceiptPrinter receipt={receipt} />
    </>
  );
}

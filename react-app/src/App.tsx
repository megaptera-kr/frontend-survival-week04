import { useState } from 'react';
import { useInterval, useLocalStorage } from 'usehooks-ts';
import RestaurantTable from './RestaurantTable';
import FilterComponent from './FilterComponent';
import menuType from './types/menuType';
import displayMenu from './functions/displayMenu';
import Receipt from './Receipt';
import useFetchRestaurants from './hooks/useFetchRestaurants';

export default function App() {
  const restaurants = useFetchRestaurants();
  const [cart, setCart] = useLocalStorage<menuType[]>('cart', []);
  const [searchText, setSearchText] = useState<string>('');
  const [categoryText, setCategoryText] = useState<string>('전체');
  const [receipt, setReceipt] = useState<unknown>(null);
  const handleCancel = function handleCancel(targetIndex: number) {
    cart.splice(targetIndex, 1);
    setCart(cart);
  };
  useInterval(() => {
    setReceipt(null);
  }, 5_000);
  const fetchReceipt = async function fetchReceipt() {
    setCart([]);
    const url = 'http://localhost:3000/orders';
    const order = {
      menu: cart,
      totalPrice: cart.reduce((acc, currentValue) => acc + currentValue.price, 0),
    };
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE 등
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
    });
    const data = await response.json();
    setReceipt(data.receipt);
  };

  const newRestaurantsData = restaurants.filter((a) => a.name.includes(searchText.trim()))
    .filter((a) => {
      if (categoryText === '전체') {
        return a;
      }
      return a.category === categoryText;
    });

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <h2>점심 바구니</h2>
      {
        cart.map((el, i) => (
          <div
            key={el.id}
          >
            {displayMenu(el.name, el.price)}
            <button
              type="button"
              onClick={() => {
                handleCancel(i);
              }}
            >
              취소
            </button>
          </div>
        ))
      }
      <button
        type="button"
        onClick={() => fetchReceipt()}
      >
        합계:
        {` ${cart.reduce((acc, currentValue) => acc + currentValue.price, 0).toLocaleString()}`}
        원 주문
      </button>
      <FilterComponent
        searchText={searchText}
        setSearchText={setSearchText}
        setCategoryText={setCategoryText}
      />
      <RestaurantTable restaurants={newRestaurantsData} />
      <Receipt receipt={receipt} />
    </>
  );
}

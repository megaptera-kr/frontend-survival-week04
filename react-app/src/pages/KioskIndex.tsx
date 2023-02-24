import { ChangeEvent, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import { Menu, ReceiptProps } from '../types/restaurants';
import Carts from '../components/Carts';
import SearchInput from '../components/SearchInput';
import CategoryButtons from '../components/CategoryButtons';
import RestaurantList from '../components/RestaurantList';
import Receipt from '../components/Receipt';
import useFilteredRestaurant from '../hooks/useFilteredRestaurant';

export default function Kiosk() {
  const [shopName, setShopName] = useState('');

  const restaurants = useFetchRestaurants();
  const { setSelectedCategory, filteredRestaurant } = useFilteredRestaurant('전체', restaurants, shopName);
  const [carts, setCarts] = useLocalStorage<Menu[]>('carts', []);
  const [receipt, setReceipt] = useLocalStorage<ReceiptProps>('receipts', {
    id: '',
    menu: [],
    totalPrice: 0,
  });

  const categoryNames = ['전체', ...new Set(restaurants?.map((shop: { category: string; }) => shop.category))];
  const totalPrice = carts.reduce((a, b) => a + b.price, 0);

  const inputShopName = (e: ChangeEvent<HTMLInputElement>) => setShopName(e.target.value.trim());

  const addCart = (item: Menu) => {
    setCarts([...carts, item]);
  };

  const cancelOrder = (idx: number) => {
    carts.splice(idx, 1);
    setCarts(carts);
  };

  const order = () => {
    fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        menu: carts,
        totalPrice,
      }),
    })
      .then((res) => res.json())
      .then((data) => setReceipt(data));
  };

  const endReceipt = () => {
    setReceipt({
      id: '',
      menu: [],
      totalPrice: 0,
    });
    setCarts([]);
  };

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <h2>Cart</h2>

      <Carts
        carts={carts}
        totalPrice={totalPrice}
        cancelOrder={cancelOrder}
        order={order}
        setCarts={setCarts}
      />

      <SearchInput
        shopName={shopName}
        inputShopName={inputShopName}
      />

      <CategoryButtons
        categoryNames={categoryNames}
        setSelectedCategory={setSelectedCategory}
      />

      <RestaurantList
        filteredRestaurant={filteredRestaurant}
        addCart={addCart}
      />

      <Receipt
        receipt={receipt}
        endReceipt={endReceipt}
      />

    </>
  );
}

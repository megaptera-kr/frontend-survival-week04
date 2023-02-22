/* eslint-disable no-shadow */
import { useState, ChangeEvent } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import {
  Category,
  FoodTable,
  Carts,
  OrderReceipt,
  SearchBar,
} from '../../components/FoodKiosk';
import useFetchRestaurants from '../../hooks/useFetchRestaurants';
import { Menu, Receipt } from '../../types/restaurants';

export default function FoodKiosk() {
  const { restaurants } = useFetchRestaurants();
  const [restaurantName, setRestaurantName] = useState('');
  const [category, setCategory] = useState('전체');
  const [lunchCarts, setLunchCarts] = useLocalStorage<Menu[]>('lunchCarts', []);
  const [receipt, setReceipt] = useLocalStorage<Receipt>('receipt', {
    id: 0,
    menus: [],
    totalPrice: 0,
  });

  const categories = restaurants.reduce(
    (acc: string[], restaurant) => {
      const { category } = restaurant;

      return acc.includes(category) ? acc : [...acc, category];
    },
    ['전체'],
  );

  const totalPrice = lunchCarts.reduce(
    (price, lunch) => price + lunch.price,
    0,
  );

  const handleClickSelectMenu = (menu: Menu) => () => {
    setLunchCarts((prev) => [...prev, menu]);
  };

  const handleClickDeleteMenu = (id: string) => () => {
    setLunchCarts((prev) => prev.filter((elem) => elem.id !== id));
  };

  const handleChangeRestaurantName = (e: ChangeEvent<HTMLInputElement>) => {
    setRestaurantName(e.target.value.trim());
  };
  const handleClickCategory = (selectedCategory: string) => () => {
    setCategory(selectedCategory);
  };

  const handleClickOrder = async () => {
    const res = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      body: JSON.stringify({
        menus: lunchCarts,
        totalPrice,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const order = await res.json();

    setReceipt(order);
  };

  const filteredRestaurants = restaurants
    ?.filter((restaurant) => restaurant.name.includes(restaurantName))
    .filter((restaurant) => {
      if (category === '전체') {
        return true;
      }

      return restaurant.category === category;
    });

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Carts
        lunchCarts={lunchCarts}
        totalPrice={totalPrice}
        handleClickDeleteMenu={handleClickDeleteMenu}
        handleClickOrder={handleClickOrder}
      />
      <SearchBar
        restaurantName={restaurantName}
        handleChangeRestaurantName={handleChangeRestaurantName}
      />
      <Category
        categories={categories}
        handleClickCategory={handleClickCategory}
      />
      <FoodTable
        restaurants={filteredRestaurants}
        handleClickSelectMenu={handleClickSelectMenu}
      />
      <OrderReceipt receipt={receipt} setReceipt={setReceipt} />
    </div>
  );
}

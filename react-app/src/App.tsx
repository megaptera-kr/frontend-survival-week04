import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import fetch from 'node-fetch';

import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import ShoppingCart from './components/ShoppingCart';
import ReceiptMenu from './components/ReceiptMenu';

import Restaurant from './types/Restaurant';
import MenuItem from './types/MenuItem';

export default function App() {
  const [restaurantsData, setRestaurantsData] = useState<Restaurant[]>([]);

  const customedRestaurants = restaurantsData.map((restaurant) => (
    {
      ...restaurant,
      menu: restaurant.menu.map((menuItem) => ({
        ...menuItem,
        id: uuidv4(),
      })),
    }
  ));

  const [cartItems, setCartItems] = useState<MenuItem[]>([]);
  const [responseReceipt, setResponseReceipt] = useState();

  const [isPlaying, setPlaying] = useState<boolean>(false);

  const [storageCartItems, setStorageCartItems] = useLocalStorage('cart', '[]');
  const [storageResponseReceipt, setStorageResponseReceipt] = useLocalStorage('receipt', '{}');

  useEffect(() => {
    async function fetchRestaurants() {
      const url = 'http:/127.0.0.1:3000/restaurants';
      const response = await fetch(url);
      const { restaurants } = await response.json();
      setRestaurantsData(restaurants);
    }
    fetchRestaurants();

    setCartItems(JSON.parse(storageCartItems));
    setResponseReceipt(JSON.parse(storageResponseReceipt));
  }, []);

  useEffect(() => {
    setStorageCartItems(JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setStorageResponseReceipt(JSON.stringify(responseReceipt));
  }, [responseReceipt]);

  return (
    <div className="app">
      <h1>푸드코트 키오스크</h1>
      <ShoppingCart
        cartItems={cartItems}
        setCartItems={setCartItems}
        setResponseReceipt={setResponseReceipt}
        isPlaying={isPlaying}
        setPlaying={setPlaying}
      />
      <FilterableRestaurantTable
        restaurants={customedRestaurants}
        setCartItems={setCartItems}
        cartItems={cartItems}
      />
      {responseReceipt === undefined || isPlaying === false
        ? <p>[영수증 나오는 곳]</p>
        : (
          <ReceiptMenu responseReceipt={responseReceipt} />
        )}
    </div>
  );
}

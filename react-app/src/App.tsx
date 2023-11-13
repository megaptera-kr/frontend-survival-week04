/* eslint-disable max-len */
import { useEffect, useState } from 'react';

import { useInterval } from 'usehooks-ts';
import Cart from './components/Cart/Cart';
import SearchBar from './components/SearchBar/SearchBar';
import Restaurants from './components/Restarants/Restaurants';
import Category from './components/SearchBar/Category';
import Receipt from './components/Receipt/Receipt';
import { RestaurantsInterface, MenuInterface, ReceiptInterface } from './Interfaces/Restaurant.interface';

interface PostData {
  menu: MenuInterface[]
  totalPrice: number
}

let entireRestaurantList: RestaurantsInterface[] = [];

export default function App() {
  const [cartItem, setCartItem] = useState<MenuInterface[]>([]);
  const [categories, setCategories] = useState(['전체']);
  const [currentCategory, setCurrentCategory] = useState('전체');
  const [searchValue, setSearchValue] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [restaurantList, setRestaurantList] = useState<RestaurantsInterface[]>([]);
  const [receipt, setReceipt] = useState<ReceiptInterface | null>(null);

  const handleSetCart = (menu: MenuInterface) => {
    setCartItem(cartItem.concat(menu));
    setTotalPrice((prev) => prev + menu.price);
  };

  const handleCategoryChange = (value: string) => {
    const filteredRestaurantList: RestaurantsInterface[] = entireRestaurantList?.filter((restaurant) => restaurant.category === value);
    if (entireRestaurantList) {
      if (value === '전체') {
        setRestaurantList([...entireRestaurantList]);
      } else {
        setRestaurantList([...filteredRestaurantList]);
      }

    }
    setCurrentCategory(value);
  };

  const handleChangeSearchValue = (value: string) => {
    if (entireRestaurantList) {
      if (currentCategory === '전체') {
        setRestaurantList(entireRestaurantList.filter((list) => list.name.indexOf(value.trim()) > -1));
      } else {
        setRestaurantList(entireRestaurantList.filter((list) => list.name.indexOf(value.trim()) > -1 && list.category === currentCategory));
      }
    }
  };

  const handleSearch = () => {
    const filteredRestaurantList = restaurantList.filter((restaurant) => restaurant.name.match(searchValue));
    setRestaurantList([...filteredRestaurantList]);
  };

  const handleSubmit = async (postData: PostData) => {
    const url = 'http://localhost:3000/orders';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...postData }),
    });
    const result = await response.json();
    setReceipt({ ...result });
  };

  useEffect(() => {
    const getRestaurants = async () => {
      const url = 'http://localhost:3000/restaurants';
      const response = await fetch(url);
      const data = await response.json();
      const { restaurants }: { restaurants: RestaurantsInterface[] } = data;
      const categoryArray = restaurants.reduce((acc: string[], cur: RestaurantsInterface) => (acc?.includes(cur.category) ? acc : [...acc, cur.category]), ['전체']);
      setCategories([...categoryArray]);
      setRestaurantList([...restaurants]);
      entireRestaurantList = [...restaurants];
    };
    getRestaurants();
  }, []);

  useInterval(() => {
    if (receipt) {
      setReceipt(null);
    }
  }, receipt ? 5000 : null);
  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <Cart menu={cartItem} totalPrice={totalPrice} handleSubmit={handleSubmit} />
      <SearchBar handleChangeSearchValue={handleChangeSearchValue} handleSearch={handleSearch} />
      <Category categories={categories} currentCategory={currentCategory} handleCategoryChange={handleCategoryChange} />
      <Restaurants restaurantList={restaurantList} handleSetCart={handleSetCart} />
      <Receipt receipt={receipt} />
    </>
  );
}

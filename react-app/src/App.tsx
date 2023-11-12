import { useEffect, useState } from 'react';

import Cart from './components/Cart/Cart';
import SearchBar from './components/SearchBar/SearchBar';
import Restaurants from './components/Restarants/Restaurants';
import Category from './components/SearchBar/Category';

let entireRestaurantList = []

export default function App() {
  const [cartItem, setCartItem] = useState([]);
  const [categories, setCategories] = useState(['전체']);
  const [currentCategory, setCurrentCategory] = useState('전체')
  const [searchValue, setSearchValue] = useState('')
  const [totalPrice, setTotalPrice] = useState(0);
  const [restaurantList, setRestaurantList] = useState([]);

  const handleSetCart = (menu) => {
    setCartItem(cartItem.concat(menu));
    setTotalPrice((prev) => prev + menu.price)
  };

  const handleChange = (value: string) => {
    const filteredRestaurantList = entireRestaurantList.filter(restaurant => restaurant.category === value)
    value === '전체' ? setRestaurantList([...entireRestaurantList]) : setRestaurantList([...filteredRestaurantList])
    setCurrentCategory(value)
  }

  const handleSearch = () => {
    const filteredRestaurantList = restaurantList.filter(restaurant => restaurant.name.match(searchValue))
    setRestaurantList([...filteredRestaurantList])
  }

  useEffect(() => {
    const getRestaurants = async () => {
      const url = 'http://localhost:3000/restaurants'
      const response = await fetch(url)
      const data = await response.json()
      const { restaurants } = data
      const categories = restaurants.reduce((acc: string[], cur: RestaurantsInterface) => (acc?.includes(cur.category) ? acc : [...acc, cur.category]), ['전체']);
      setCategories([...categories])
      setRestaurantList([...restaurants])
      entireRestaurantList = [...restaurants]
    }
    getRestaurants()
  }, [])
  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <Cart menu={cartItem} totalPrice={totalPrice} handleSetCart={handleSetCart} />
      <SearchBar setSearchValue={setSearchValue} handleSearch={handleSearch} />
      <Category categories={categories} currentCategory={currentCategory} handleChange={handleChange} />
      <Restaurants restaurantList={restaurantList} handleSetCart={handleSetCart} />
    </>
  );
}

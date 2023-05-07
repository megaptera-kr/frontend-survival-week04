import { useState } from 'react';
import restaurantsInfo from '../data/fetchData';
import { MenuItem } from '../type/menu';
import RestaurantTable from './RestaurantTable';
import SearchBar from './SearchBar';

export default function FilterableTable() {
  const [receipt, setReceipt] = useState<MenuItem[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [foodType, setFoodType] = useState<string>('전체');
  const { restaurants } = restaurantsInfo();
  const filteredRestaurants = restaurants.filter((menu) => ((menu.name).includes(inputText.trim()))).filter((menu) => (menu.category === foodType || foodType === '전체'));
  return (
    <>
      <SearchBar
        receipt={receipt}
        setReceipt={setReceipt}
        inputText={inputText}
        setInputText={setInputText}
        setFoodType={setFoodType}
      />
      <RestaurantTable
        restaurants={filteredRestaurants}
        receipt={receipt}
        setReceipt={setReceipt}
      />
    </>
  );
}

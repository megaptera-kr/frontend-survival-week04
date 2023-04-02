/* eslint-disable no-use-before-define */
import React from 'react';
import { Menu, Restaurant } from '../../types';
import CategorySelect from './CategorySelect';
import SearchBar from './SearchBar';
import Table from './Table';

type Props = {
  restaurants: Restaurant[];
  onClickAddOrder: (menu: Menu) => void;
}

function RestaurantList({ restaurants = [], onClickAddOrder }: Props) {
  const [searchText, setSearchText] = React.useState<string>('');
  const [category, setCategory] = React.useState<string>('전체');

  // 식당 목록 필터링
  const list = restaurants
    .filter((restaurant) => filterByRestaurantName(restaurant, searchText))
    .filter((restaurant) => filterByCategory(restaurant, category));

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleClickCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(event.currentTarget.name);
  };

  return (
    <div>
      <SearchBar onChangeInput={handleChangeInput} />
      <CategorySelect onClickCategory={handleClickCategory} />
      <Table restaurants={list} onClickAddOrder={onClickAddOrder} />
    </div>
  );
}

export default RestaurantList;

function filterByRestaurantName(restaurant: Restaurant, searchText: string) {
  if (searchText.trim().length === 0) {
    return restaurant;
  }
  return restaurant.name.includes(searchText);
}

function filterByCategory(restaurant: Restaurant, category: string) {
  if (category === '전체') {
    return restaurant;
  }
  return restaurant.category === category;
}

import React from 'react';
import { Restaurant } from '../../types';
import CategorySelect from './CategorySelect';
import SearchBar from './SearchBar';
import Table from './Table';

type Props = {
  restaurants: Restaurant[];
}

function RestaurantList({ restaurants = [] }: Props) {
  const [list, setList] = React.useState<Restaurant[]>(restaurants);

  // 이름 검색 기능
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      return setList(restaurants);
    }

    // eslint-disable-next-line max-len
    return setList(restaurants.filter((restaurant) => (restaurant.name.includes(event.target.value))));
  };

  return (
    <div>
      <SearchBar onChangeInput={handleChangeInput} />
      <CategorySelect />
      <Table restaurants={list} />
    </div>
  );
}

export default RestaurantList;

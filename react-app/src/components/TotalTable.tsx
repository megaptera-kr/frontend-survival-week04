import { useState } from 'react';

import { useLocalStorage } from 'usehooks-ts';
import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

import Restaurant, { Menu } from '../types/Restaurant';

import selectCategories from '../utils/selectCategories';
import filterRestaurants from '../utils/filterRestaurants';

type RestaurantTableProps = {
  restaurants: Restaurant[];
};

export default function TotalTable({
  restaurants,
}: RestaurantTableProps) {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setCategory] = useState<string>('전체');

  const categories = selectCategories(restaurants);

  const Restaurantslist = filterRestaurants(restaurants, {
    filterText, filterCategory,
  });

  const [selectedFoods, selectFood] = useLocalStorage<Menu[]>('cart', []);

  const handleClickMenu = (menu: Menu) => () => {
    selectFood([
      ...selectedFoods,
      menu,
    ]);
  };

  return (
    <div>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setCategory={setCategory}
      />
      <RestaurantTable restaurants={Restaurantslist} handleClickMenu={handleClickMenu} />
    </div>
  );
}

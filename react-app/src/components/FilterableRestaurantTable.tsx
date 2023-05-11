import { useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';

import FilterableRestaurant from './FilterableRestaurant';
import RestaurantTable from './RestaurantTable';

import filterRestaurants from '../utils/filterRestaurants';
import selectCategories from '../utils/selectCategories';

import { Restaurant } from '../types/restaurants';
import { Cart } from '../types/cart';

type FilterableRestaurantTableProps = {
  cart: Cart;
  setCart: (value: Cart) => void;
}

export default function FilterableRestaurantTable({
  cart, setCart,
}: FilterableRestaurantTableProps) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [filterCategoryText, setFilterCategoryText] = useState<string>('전체');
  const [filterText, setFilterText] = useState<string>('');

  useEffectOnce(() => {
    const fetchRestaurants = async () => {
      const url = 'http://localhost:3000/restaurants';
      const response = await fetch(url);
      const data = await response.json();
      setRestaurants(data.restaurants);
    };
    fetchRestaurants();
  });

  const filterableRestaurants = filterRestaurants(restaurants, { filterText, filterCategoryText });
  const categories: string[] = selectCategories(restaurants);

  return (
    <>
      <FilterableRestaurant
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategoryText={setFilterCategoryText}
      />
      <RestaurantTable
        restaurants={filterableRestaurants}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
}

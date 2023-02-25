import { useState } from 'react';
import LunchBasket from './LunchBasket';
import SearchField from './SearchField';
import RestaurantsTable from './RestaurantsTable';
import ReceiptSection from './ReceiptSection';

import Restaurant from '../types/Restaurant';
import filterRestaurants from '../utils/filterRestaurants';
import Menu from '../types/Menu';

type FoodCourtKioskProps = {
    restaurants: Restaurant[]
}
export default function FoodCourtKiosk({ restaurants }: FoodCourtKioskProps) {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');
  const [selectedMenus, setSelectedMenus] = useState<Menu[]>([]);

  const filteredRestaurants = filterRestaurants(
    restaurants,
    { filterText, filterCategory },
  );

  return (
    <>
      <LunchBasket
        selectedMenus={selectedMenus}
        setSelectedMenus={setSelectedMenus}
      />
      <SearchField
        restaurants={restaurants}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantsTable
        restaurants={filteredRestaurants}
        selectedMenus={selectedMenus}
        setSelectedMenus={setSelectedMenus}
      />
      <ReceiptSection />
    </>
  );
}

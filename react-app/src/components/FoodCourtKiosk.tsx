import { useState } from 'react';
import { useInterval, useLocalStorage } from 'usehooks-ts';

import LunchBasket from './LunchBasket';
import SearchField from './SearchField';
import RestaurantsTable from './RestaurantsTable';
import ReceiptSection from './ReceiptSection';

import filterRestaurants from '../utils/filterRestaurants';

import Restaurant from '../types/Restaurant';
import Menu from '../types/Menu';
import Receipt from '../types/Receipt';

type FoodCourtKioskProps = {
    restaurants: Restaurant[]
}
export default function FoodCourtKiosk({ restaurants }: FoodCourtKioskProps) {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const [selectedMenus, setSelectedMenus] = useLocalStorage<Menu[]>('selectedMenus', []);
  const [receipt, setReceipt] = useLocalStorage<Receipt>('receipt', { id: '', menu: [], totalPrice: 0 });

  // const [selectedMenus, setSelectedMenus] = useState<Menu[]>([]);
  // const [receipt, setReceipt] = useState<Receipt>({ id: '', menu: [], totalPrice: 0 });

  const filteredRestaurants = filterRestaurants(
    restaurants,
    { filterText, filterCategory },
  );

  useInterval(() => {
    if (!receipt.totalPrice) {
      return;
    }

    setReceipt({ id: '', menu: [], totalPrice: 0 });
  }, 5_000);

  return (
    <>
      <LunchBasket
        selectedMenus={selectedMenus}
        setSelectedMenus={setSelectedMenus}
        setReceipt={setReceipt}
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
      <ReceiptSection
        receipt={receipt}
      />
    </>
  );
}

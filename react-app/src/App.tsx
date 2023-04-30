import { useState } from 'react';

import Receipt from './types/Receipt';

import usefetchRestaurants from './hooks/usefetchRestaurants';

import Title from './components/Title';
import Cart from './components/Cart';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import ReceiptPrinter from './components/ReceiptPrinter';

import getCategories from './utils/getCategories';

export default function App() {
  const [receipt, setReceipt] = useState<Receipt|undefined>();

  const restaurants = usefetchRestaurants();

  const categories = getCategories(restaurants);

  return (
    <>
      <Title />
      <Cart setReceipt={setReceipt} />
      <FilterableRestaurantTable
        restaurants={restaurants}
        categories={categories}
      />
      <ReceiptPrinter
        receipt={receipt}
        setReceipt={setReceipt}
      />
    </>
  );
}

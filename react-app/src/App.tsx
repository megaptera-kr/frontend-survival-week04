import { useLocalStorage } from 'usehooks-ts';

import { useEffect, useState } from 'react';
import Header from './components/common/Header';
import RestaurantCart from './components/cart/RestaurantCart';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import RestaurantReceipt from './components/receipt/RestaurantReceipt';

import { Cart } from './types/cart';

export default function App() {
  const [receipt, setReceipt] = useState<Cart>({
    menu: [],
    totalPrice: 0,
  });
  const [cart, setCart] = useLocalStorage<Cart>('cart', {
    menu: [],
    totalPrice: 0,
  });
  useEffect(() => {
    setCart(cart);
  }, []);

  return (
    <>
      <Header />
      <RestaurantCart
        cart={cart}
        setCart={setCart}
        setReceipt={setReceipt}
      />
      <FilterableRestaurantTable
        cart={cart}
        setCart={setCart}
      />
      <RestaurantReceipt
        receipt={receipt}
        setReceipt={setReceipt}
      />
    </>
  );
}

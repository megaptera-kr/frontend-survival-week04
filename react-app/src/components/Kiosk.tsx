import { useFetch } from 'usehooks-ts';

import { useEffect } from 'react';
import SearchFilter from './SearchFilter';
import RestaurantsTable from './RestaurantsTable';
import Cart from './Cart';
import OrderResult from './OrderResult';
import useKioskFilter from '../hooks/useKioskFilter';
import useCart from '../hooks/useCart';
import useOrder from '../hooks/useOrder';
import { Restaurant } from '../types/kiosk';
import { filterRestaurants } from '../utils/filter';

export default function Kiosk() {
  const { data: restaurants = [] } = useFetch<Restaurant[]>('http://localhost:3000/restaurants');
  const { filter, handleChangeFilter } = useKioskFilter();
  const { cartItems, addToCart, clearCart } = useCart();
  const { receipts, orderCart } = useOrder(cartItems);

  useEffect(() => {
    clearCart();
  }, [receipts]);

  return (
    <section style={{ display: 'flex', justifyContent: 'space-between', columnGap: '10px' }}>
      <SearchFilter categories={['전체', '중식', '일식', '한식']} filter={filter} onChangeFilter={handleChangeFilter} />
      <RestaurantsTable
        restaurants={filterRestaurants(restaurants, filter)}
        addToCart={addToCart}
      />
      <Cart cartItems={cartItems} clearCart={clearCart} orderCart={orderCart} />
      {receipts ? <OrderResult receipts={receipts} /> : <span>[영수증 나오는 곳]</span>}
    </section>
  );
}

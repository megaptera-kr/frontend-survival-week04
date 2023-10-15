import { useInterval, useLocalStorage } from 'usehooks-ts';
import { useState } from 'react';
import CartField from './components/CartField';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import RecieptField from './components/RecieptField';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import Menu from './types/Menu';
import { OrderType } from './types/Order';

export default function App() {
  const restaurants = useFetchRestaurants();

  const [isOrder, setIsOrder] = useState<boolean>(false);
  const [cartList, setCartList] = useLocalStorage<Menu[]>('cartList', []);
  const [order, setOrder] = useLocalStorage<OrderType>('orderList', { id: '', menu: [], totalPrice: '0' });

  useInterval(() => {
    setIsOrder(false);
    setOrder({
      id: '0',
      menu: [],
      totalPrice: '0',
    });
  }, isOrder ? 5000 : null);

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <CartField
        cartList={cartList}
        setCartList={setCartList}
        setOrder={setOrder}
        setIsOrder={setIsOrder}
      />
      <FilterableRestaurantTable restaurants={restaurants} />
      {
        isOrder ? <RecieptField order={order} /> : <p>[영수증 나오는 곳]</p>
      }
    </div>
  );
}

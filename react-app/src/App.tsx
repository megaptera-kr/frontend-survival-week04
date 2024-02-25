import CartContainer from './components/cart/CartContainer';
import RestaurantContainer from './components/menu/RestaurantContainer';
import ReceiptContainer from './components/receipt/ReceiptContainer';

import useFetchrestaurants from './hooks/useFetchrestaurants';

export default function App() {
  const restaurants = useFetchrestaurants();

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <CartContainer />
      <RestaurantContainer restaurants={restaurants} />
      <ReceiptContainer />
    </div>
  );
}

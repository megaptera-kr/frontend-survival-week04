import Cart from './components/Cart';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';
import Receipt from './components/Receipt';

import useFetchRestaurants from './hooks/useFetchRestaurants';
import useOrder from './hooks/useOrder';

export default function App() {
  const restaurants = useFetchRestaurants();
  const { order, receipt } = useOrder();

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Cart order={order} />
      <FilterableRestaurantsTable restaurants={restaurants} />
      <Receipt receipt={receipt} />
    </div>
  );
}

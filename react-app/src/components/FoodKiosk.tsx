import FilterRestaurantsTable from './FilterRestaurantsTable';
import ReceiptPrinter from './ReceiptPrinter';
import Cart from './Cart';

import useFetchRestaurants from '../hooks/useFetchRestaurants';
import useReceipt from '../hooks/useReceipt';

export default function FoodKiosk() {
  const restaurants = useFetchRestaurants();

  const { receipt, setReceipt } = useReceipt();

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Cart setReceipt={setReceipt} />
      <FilterRestaurantsTable restaurants={restaurants} />
      <ReceiptPrinter receipt={receipt} />
    </div>
  );
}

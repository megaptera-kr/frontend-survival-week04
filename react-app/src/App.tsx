import { useLocalStorage } from 'usehooks-ts';
import Cart from './components/Cart';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';
import Printer from './components/Printer';
import ReceiptPrinter from './components/ReceiptPrinter';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import Receipt from './type/Receipt';

const emptyReceipt = {} as Receipt;

export default function App() {
  const restaurants = useFetchRestaurants();
  const [orderReceipt, setOrderReceipt] = useLocalStorage<Receipt>('receipt', emptyReceipt);
  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <Cart />
      <FilterableRestaurantsTable restaurants={restaurants} />
      {
        orderReceipt.id ? <ReceiptPrinter orderReceipt={orderReceipt} /> : <Printer />
      }

    </>
  );
}

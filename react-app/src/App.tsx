import { useLocalStorage } from 'usehooks-ts';
import Cart from './components/Cart';
import FilterableTable from './components/FilterableTable';
import Receipt from './components/Receipt';

export default function App() {
  const [receipt, setReceipt] = useLocalStorage('receipt', {});

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <Cart setReceipt={setReceipt} />
      <FilterableTable />
      <Receipt receipt={receipt} setReceipt={setReceipt} />
    </>
  );
}

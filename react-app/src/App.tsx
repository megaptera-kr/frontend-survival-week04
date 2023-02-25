import Bucket from './components/Bucket';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import ReceiptBox from './components/ReceiptBox';

export default function App() {
  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Bucket />
      <FilterableRestaurantTable />
      <ReceiptBox />
    </div>
  );
}

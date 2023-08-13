import Basket from './components/Basket';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';

export default function App() {
  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Basket />
      <FilterableRestaurantsTable />
    </div>
  );
}

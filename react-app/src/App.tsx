import Basket from './components/Basket';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';
import Receipt from './components/Receipt';

export default function App() {
  return (
    <div style={{
      display: 'flex',
    }}
    >
      <div>
        <h1>푸드코트 키오스크</h1>
        <Basket />
        <FilterableRestaurantsTable />
      </div>
      <Receipt />
    </div>
  );
}

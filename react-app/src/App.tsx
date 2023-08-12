import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';

import useFetchRestaurants from './hooks/useFetchRestaurants';

export default function App() {
  const { data } = useFetchRestaurants();

  console.log('data', data);

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <div>바구니영역</div>
      <FilterableRestaurantsTable />
    </div>
  );
}

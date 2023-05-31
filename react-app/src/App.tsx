import FilterableProductTable from './FilterableProductTable';
import useFetchRestaurants from './hooks/useFetchRestaurants';

export default function App() {
  const restaurants = useFetchRestaurants();
  return (
    <>
      <p>푸드코트 키오스크</p>
      <p>점심 바구니</p>
      <FilterableProductTable lorr={restaurants} />
    </>
  );
}

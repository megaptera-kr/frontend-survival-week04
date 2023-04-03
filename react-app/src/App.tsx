import SearchBar from './components/SearchBar';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';
import useFetchRestaurants from './hooks/useFetchRestaurants';

export default function App() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <SearchBar />
      <FilterableRestaurantsTable restaurants={restaurants} />
    </div>
  );
}

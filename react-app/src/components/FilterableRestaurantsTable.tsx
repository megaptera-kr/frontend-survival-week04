import useFetchRestaurants from '../hooks/useFetchRestaurants';
import RestaurantsTable from './RestaurantsTable';

export default function FilterableRestaurantsTable() {
  const { data } = useFetchRestaurants();
  const restaurants = data?.restaurants || [];

  return (
    <>
      <div>검색영역</div>
      <RestaurantsTable restaurants={restaurants} />
    </>
  );
}

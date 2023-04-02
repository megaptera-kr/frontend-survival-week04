import SearchFilter from './SearchFilter';
import RestaurantsTable from './RestaurantsTable';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import useFilterRestaurants from '../hooks/useFilterRestaurants';
import useCart from '../hooks/useCart';
import { filterRestaurants } from '../utils/filter';

export default function FilterableRestaurantsTable() {
  const restaurants = useFetchRestaurants();
  const { filter, handleChangeFilter } = useFilterRestaurants();
  const { addToCart } = useCart();

  return (
    <article>
      <SearchFilter
        categories={['전체', '중식', '일식', '한식']}
        filter={filter}
        onChangeFilter={handleChangeFilter}
      />
      <RestaurantsTable
        restaurants={filterRestaurants(restaurants, filter)}
        addToCart={addToCart}
      />
    </article>
  );
}

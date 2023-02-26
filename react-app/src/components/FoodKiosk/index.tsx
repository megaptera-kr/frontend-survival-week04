import FilterableRestaurantsTable from '../FilterableRestaurantsTable';
import { TRestaurantsResponse } from '../../types/restaurant';
import Cart from '../Cart';

function FoodKiosk({ restaurants }: { restaurants: TRestaurantsResponse[] }) {
  return (
    <div className="food-kiosk">
      <Cart />
      <FilterableRestaurantsTable restaurants={restaurants} />
    </div>
  );
}

export default FoodKiosk;

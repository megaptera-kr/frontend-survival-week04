import Restaurant from './components/Restaurant/Restaurant';
import { RestaurantsInterface } from '../../Interfaces/Restaurant.interface';

interface RestaurantsProps {
  restaurantList: RestaurantsInterface[]
  handleSetCart: () => void
}

function Restaurants({ restaurantList, handleSetCart }: RestaurantsProps) {
  return (
    <Restaurant restaurantList={restaurantList} handleSetCart={handleSetCart} />
  );
}
export default Restaurants;

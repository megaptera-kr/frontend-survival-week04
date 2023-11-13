import Restaurant from './components/Restaurant/Restaurant';
import { RestaurantsInterface, MenuInterface } from '../../Interfaces/Restaurant.interface';

interface RestaurantsProps {
  restaurantList: RestaurantsInterface[]
  handleSetCart: (menu: MenuInterface) => void
}

function Restaurants({ restaurantList, handleSetCart }: RestaurantsProps) {
  return (
    <Restaurant restaurantList={restaurantList} handleSetCart={handleSetCart} />
  );
}
export default Restaurants;

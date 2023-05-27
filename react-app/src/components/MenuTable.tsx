import RestaurantsType from '../types/RestaurantsType';
import filterRestaurants from '../utils/filterRestaurants';
import MenuBody from './MenuBody';
import MenuHead from './MenuHead';

type MenuTableProps = {
  restaurants: RestaurantsType[]
}

export default function MenuTable({ restaurants }: MenuTableProps) {
  return (
    <table>
      <MenuHead />
      <tbody>
        {restaurants.map((restaurant) => (
          <MenuBody key={restaurant.id} restaurant={restaurant} />
        ))}

      </tbody>
    </table>
  );
}

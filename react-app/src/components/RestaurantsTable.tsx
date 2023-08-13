import { IRestaurant } from '../types/restaurants';
import RestaurantsTableHeader from './RestaurantsTableHeader';
import RestaurantsTableRow from './RestaurantsTableRow';

type RestaurantsTableProps = {
  restaurants: IRestaurant[];
};

export default function RestaurantsTable({
  restaurants,
}: RestaurantsTableProps) {
  return (
    <table>
      <RestaurantsTableHeader />
      <tbody>
        {
          restaurants.map((restaurant) => (
            <RestaurantsTableRow key={restaurant.id} restaurant={restaurant} />
          ))
        }
      </tbody>
    </table>
  );
}

import Restaurant from '../types/Restaurant';
import RestaurantTable from './RestaurantTable';
import RestaurantRow from './RestaurantRow';

interface FilterableRestaurantsTableProps {
    restaurants: Restaurant[];
}

export default function FilterableRestaurantsTable({
  restaurants = [],
}: FilterableRestaurantsTableProps) {
  return (
    <table>
      <RestaurantTable />
      <tbody>
        {
          restaurants.map((restaurant) => (
            <RestaurantRow
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))
        }
      </tbody>
    </table>
  );
}

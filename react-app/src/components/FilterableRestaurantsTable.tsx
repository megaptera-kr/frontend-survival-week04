import Restaurant from '../types/Restaurant';
import RestaurantTable from './RestaurantTable';
import RestaurantRow from './RestaurantRow';
import Menu from '../types/Menu';

interface FilterableRestaurantsTableProps {
    restaurants: Restaurant[];
    onAddCart: (menuItem: Menu) => void;
}

export default function FilterableRestaurantsTable({
  restaurants = [],
  onAddCart,
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
              onAddCart={onAddCart}
            />
          ))
        }
      </tbody>
    </table>
  );
}

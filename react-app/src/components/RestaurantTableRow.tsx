import { Restaurant } from '../types/Restaurant';
import Foods from './Foods';

interface RestaurantTableRowProps {
  restaurant: Restaurant;
}

export default function RestaurantTableRow({
  restaurant,
}: RestaurantTableRowProps) {
  return (
    <tr key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <Foods menu={restaurant.menu} />
      </td>
    </tr>
  );
}

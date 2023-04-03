import Restaurant from '../types/Restaurant';
import Menu from './Menu';

type RestaurantInnerContentsProps = {
  restaurant: Restaurant;
}

export default function RestaurantInnerContents({
  restaurant,
}: RestaurantInnerContentsProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <Menu menu={restaurant.menu} />
      </td>
    </tr>
  );
}

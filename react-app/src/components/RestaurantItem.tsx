import RestaurantMenus from './RestaurantMenus';

import Restaurant from '../types/Restaurant';

type RestaurantItemProps = {
    restaurant: Restaurant
}

export default function RestaurantItem({ restaurant }:RestaurantItemProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <RestaurantMenus menu={restaurant.menu} />
    </tr>
  );
}

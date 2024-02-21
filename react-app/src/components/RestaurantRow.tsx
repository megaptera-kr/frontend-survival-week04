import Food from './Food';

import Restaurant from '../Types/Restaurant';

type RestaurantRowProps = {
  restaurant: Restaurant;
};

export default function RestaurantRow({ restaurant }: RestaurantRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <Food menu={restaurant.menu} />
      </td>
    </tr>
  );
}

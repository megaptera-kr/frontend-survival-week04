import Foods from './Food';

import Restaurant from '../types/Restuarant';

type RestaurantRowProps = {
  restaurant: Restaurant;
}

export default function RestaurantRow({
  restaurant,
}:RestaurantRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {
            restaurant.menu?.map((menu) => (
              <Foods
                key={menu.id}
                menu={menu}
              />
            ))
          }
        </ul>
      </td>
    </tr>
  );
}

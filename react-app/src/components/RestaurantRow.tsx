import { Restaurant } from '../types';
import MenuItem from './MenuItem';

type Props = {
  restaurant: Restaurant
}

export default function RestaurantRow({ restaurant }:Props) {
  return (
    <tr className="text-lg">
      <td
        className="text-center border-2 border-purple-400"
      >
        {restaurant.name}
      </td>
      <td
        className="text-center border-2 border-purple-400"
      >
        {restaurant.category}
      </td>
      <td
        className="text-center border-2 border-purple-400"
      >
        <ul className="w-full">
          {restaurant.menu.map((menu) => (
            <MenuItem
              key={menu.id}
              menu={menu}
            />
          ))}
        </ul>
      </td>
    </tr>
  );
}

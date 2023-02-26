import { TRestaurantsResponse } from '../../types/restaurant';
import Menu from './Menu';

function RestaurantRow({ restaurant }: { restaurant: TRestaurantsResponse }) {
  const { name, category, menu } = restaurant;

  return (
    <tr>
      <td>
        {name}
      </td>
      <td>
        {category}
      </td>
      <td>
        <Menu menu={menu} />
      </td>
    </tr>
  );
}

export default RestaurantRow;

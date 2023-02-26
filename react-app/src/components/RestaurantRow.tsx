import Foods from './Food';
import { TRestaurantsResponse } from '../types/restaurant';

type RestaurantProps = {
  restaurant: TRestaurantsResponse;
};

function RestaurantRow({ restaurant }: RestaurantProps) {
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
        <Foods menu={menu} />
      </td>
    </tr>
  );
}

export default RestaurantRow;

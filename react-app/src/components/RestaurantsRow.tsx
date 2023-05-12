import Restaurants from '../type/Restaurants';
import Menu from './Menu';

type RestaurantsRowProps = {
  restaurant: Restaurants
}

export default function RestaurantsRow({ restaurant }: RestaurantsRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        {
          (restaurant.menu).map((food) => (
            <Menu food={food} key={food.id} />
          ))
        }
      </td>
    </tr>
  );
}

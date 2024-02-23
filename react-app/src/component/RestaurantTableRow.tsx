import Restaurant from '../types/RestaurantType';
import RestaurantMenu from './RestaurantMenu';

type RestaurantProps = {
  restaurant: Restaurant;
};

function RestaurantTableRow({ restaurant }: RestaurantProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((menu) => (
            <RestaurantMenu key={menu.id} restaurantMenu={menu} />
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default RestaurantTableRow;

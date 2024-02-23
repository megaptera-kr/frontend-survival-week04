import RestaurantMenu from './RestaurantMenu';

import RestaurantType from '../types/RestaurantType';
import RestaurantMenuType from '../types/RestaurantMenuType';

type RestaurantProps = {
  restaurant: RestaurantType;
  handleUpdateCart: () => void;
};

function RestaurantTableRow({ restaurant, handleUpdateCart }: RestaurantProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((menu: RestaurantMenuType) => (
            <RestaurantMenu
              key={menu.id}
              restaurantMenu={menu}
              handleUpdateCart={handleUpdateCart}
            />
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default RestaurantTableRow;

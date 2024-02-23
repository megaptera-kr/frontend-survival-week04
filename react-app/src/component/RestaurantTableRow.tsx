import RestaurantMenu from './RestaurantMenu';

import RestaurantType from '../types/RestaurantType';
import RestaurantMenuType from '../types/RestaurantMenuType';
import CartItemType from '../types/CartItemType';

type RestaurantProps = {
  restaurant: RestaurantType;
  handleAddCartItem: (item: CartItemType) => void;
};

function RestaurantTableRow({
  restaurant,
  handleAddCartItem,
}: RestaurantProps) {
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
              handleAddCartItem={handleAddCartItem}
            />
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default RestaurantTableRow;

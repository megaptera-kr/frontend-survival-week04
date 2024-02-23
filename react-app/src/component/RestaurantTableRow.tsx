import Restaurant from '../types/RestaurantType';
import RestaurantMenu from './RestaurantMenu';

type RestaurantProps = {
  restaurant: Restaurant;
  handleUpdateCart: () => void;
};

function RestaurantTableRow({ restaurant, handleUpdateCart }: RestaurantProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((menu) => (
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

import { MenuItem } from '../types/MenuItem';
import { Restaurant } from '../types/Restaurant';
import RestaurantMenu from './RestaurantMenu';

type RestaurantInCategoryProps = {
  restaurant: Restaurant;
  handleSelectMenu: (orders: MenuItem) => void;
};

function RestaurantInCategory({
  restaurant,
  handleSelectMenu,
}: RestaurantInCategoryProps) {
  return (
    <tr key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((item) => (
            <RestaurantMenu
              key={item.id}
              menu={item}
              handleSelectMenu={handleSelectMenu}
            />
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default RestaurantInCategory;

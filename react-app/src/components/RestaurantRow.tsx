import Restaurant from '../types/Restaurant';
import MenuListItem from './MenuListItem';

type RestaurantRowProps = {
  restaurant: Restaurant;
};

function RestaurantRow({ restaurant }: RestaurantRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((menu) => (
            <MenuListItem key={menu.name} menu={menu} />
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default RestaurantRow;

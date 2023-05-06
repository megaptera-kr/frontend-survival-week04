import Restaurant from '../types/Restaurant';
import MenuRow from './MenuRow';

type RestaurantRowProps = {
  restaurant : Restaurant;
}
export default function RestaurantRow({
  restaurant,
}: RestaurantRowProps) {
  return (
    <tr key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        { restaurant.menu.map((menu) => (
          <MenuRow
            key={menu.id}
            menu={menu}
          />
        ))}
      </td>
    </tr>
  );
}

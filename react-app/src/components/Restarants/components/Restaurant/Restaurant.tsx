import { RestaurantsInterface } from '../../../../Interfaces/Restaurant.interface';
import Menu from './Menu';

function Restaurant({ restaurantList, handleSetCart }: RestaurantsInterface[]) {
  const restaurantRow = restaurantList.map((restaurant) => (
    <tr key={`restaurant_${restaurant.id}`}>
      <td>{restaurant.category}</td>
      <td>{restaurant.name}</td>
      <td><Menu menues={restaurant.menu} handleSetCart={handleSetCart} /></td>
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>종류</th>
          <th>식당명</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {restaurantRow}
      </tbody>
    </table>
  );
}
export default Restaurant;

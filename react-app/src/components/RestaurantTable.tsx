import { Restaurant, RestaurantMenu } from '../types';
import RestaurantMenuRow from './RestaurantMenuRow';

interface RestaurantTableProps {
  filteredRestaurants: Restaurant[];
  handleClickMenu: (menu: RestaurantMenu) => void;
}

export default function RestaurantTable({
  filteredRestaurants,
  handleClickMenu,
}:RestaurantTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {filteredRestaurants.map(({
          category, id, menu: menus, name,
        }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{category}</td>
            <td>
              {menus.map((menu) => (
                <RestaurantMenuRow key={menu.id} menu={menu} handleClickMenu={handleClickMenu} />
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

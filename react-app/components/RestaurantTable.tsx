import { Menu, Restaurants, SetValue } from '../types';
import TableMenuRow from './TableMenuRow';

type Props = {
 restaurants: Restaurants[],
 setCart: SetValue<Menu[]>
}

function RestaurantTable({ restaurants, setCart } : Props) {
  const handleClickMenu = (item : Menu) => {
    setCart((prev) => [...prev, item]);
  };

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
        {restaurants?.map((el) => (
          <tr key={el.id}>
            <td>{el.name}</td>
            <td>{el.category}</td>
            <td>
              <TableMenuRow menus={el.menu} handleClickMenu={handleClickMenu} />
            </td>
          </tr>
        ))}

      </tbody>
    </table>
  );
}

export default RestaurantTable;

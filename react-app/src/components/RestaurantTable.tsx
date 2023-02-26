import { Restaurant, Menu } from '../types/Restaurant';

type RestaurantTableProps = {
    restaurants: Restaurant[];
    handleClickMenu: (menu: Menu) => () => void;
};
export default function RestaurantTable({ restaurants, handleClickMenu }: RestaurantTableProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.category}</td>
              <td>
                <ul>
                  {restaurant.menu.map((menu) => (
                    <li key={menu.id}>
                      <span>
                        {menu.name}
                        :
                        {menu.price}
                        원
                      </span>
                      <span>
                        <button
                          type="button"
                          onClick={handleClickMenu(menu)}
                          name={`#${menu.name}`}
                        >
                          선택
                        </button>
                      </span>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

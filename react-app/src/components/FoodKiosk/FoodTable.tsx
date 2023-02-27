import { Menu, Restaurant } from '../../types/restaurants';

type FoodTableProps = {
  restaurants: Restaurant[];
  handleClickSelectMenu: (menu: Menu) => () => void;
};

export default function FoodTable({
  restaurants,
  handleClickSelectMenu,
}: FoodTableProps) {
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
        {restaurants?.map((restaurant) => (
          <tr key={restaurant.id}>
            <td>{restaurant.name}</td>
            <td>{restaurant.category}</td>
            <td>
              <ul>
                {restaurant.menus.map((menu) => (
                  <li key={menu.id}>
                    <span>
                      {menu.name}:{menu.price}원
                    </span>
                    <span>
                      <button
                        type="button"
                        onClick={handleClickSelectMenu(menu)}
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
  );
}

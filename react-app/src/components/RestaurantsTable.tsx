import Restaurant from '../types/Restaurant';
import RestaurantRow from './RestaurantRow';

import Menu from '../types/Menu';

type RestaurantsTableProps = {
    restaurants: Restaurant[];
    selectedMenus: Menu[];
    setSelectedMenus: (menus: Menu[]) => void;
}

export default function RestaurantsTable({
  restaurants, selectedMenus, setSelectedMenus,
}: RestaurantsTableProps) {
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
        {restaurants.map((restaurant) => (
          <RestaurantRow
            key={restaurant.id}
            restaurant={restaurant}
            selectedMenus={selectedMenus}
            setSelectedMenus={setSelectedMenus}
          />
        ))}
      </tbody>
    </table>
  );
}

import { Restaurant } from '../types/Restaurant';
import { MenuItem } from '../types/MenuItem';
import RestaurantInCategory from './RestaurantInCategory';

type RestaurantTableProps = {
  filteredCategories: Restaurant[];
  handleSelectMenu: (orders: MenuItem) => void;
};

function RestaurantTable({
  filteredCategories,
  handleSelectMenu,
}: RestaurantTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ paddingInline: '2rem' }}>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {filteredCategories.map((restaurant) => (
          <RestaurantInCategory
            key={restaurant.id}
            restaurant={restaurant}
            handleSelectMenu={handleSelectMenu}
          />
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;

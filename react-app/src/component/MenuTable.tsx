import Restaurant from '../types/RestaurantType';
import RestaurantTableRow from './RestaurantTableRow';

type MenuTableProps = {
  restaurants: Restaurant[];
};

function MenuTable({ restaurants }: MenuTableProps) {
  return (
    <div className='menu-table'>
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
            <RestaurantTableRow key={restaurant.id} restaurant={restaurant} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MenuTable;

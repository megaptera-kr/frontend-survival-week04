import RestaurantTableRow from './RestaurantTableRow';

import RestaurantType from '../types/RestaurantType';
import CartItemType from '../types/CartItemType';

type MenuTableProps = {
  restaurants: RestaurantType[];
  handleAddCartItem: (item: CartItemType) => void;
};

function MenuTable({ restaurants, handleAddCartItem }: MenuTableProps) {
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
          {restaurants.map((restaurant: RestaurantType) => (
            <RestaurantTableRow
              key={restaurant.id}
              restaurant={restaurant}
              handleAddCartItem={handleAddCartItem}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MenuTable;

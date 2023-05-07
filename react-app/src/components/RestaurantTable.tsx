import { Menu, MenuItem } from '../type/menu';
import MenuInfo from './MenuInfo';
import Receipt from './Receipt';

type RestaurantTableProps = {
  restaurants : Menu[],
  receipt : MenuItem[],
  setReceipt : (value: MenuItem[])=>void
}

export default function RestaurantTable({
  restaurants,
  receipt,
  setReceipt,
}: RestaurantTableProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>식당이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {
            restaurants.map((restaurant) => (
              <tr key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.category}</td>
                <MenuInfo restaurant={restaurant} receipt={receipt} setReceipt={setReceipt} />
              </tr>
            ))
          }
        </tbody>
      </table>
      <div>
        <Receipt receipt={receipt} />
      </div>
    </div>
  );
}

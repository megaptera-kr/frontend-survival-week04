import Restaurant from '../types/Restaurant';
import RestaurantTableRow from './RestaurantTableRow';

type RestaurantTableProps = {
  restaurants: Restaurant[];
}

export default function RestaurantTable({
  restaurants,
}: RestaurantTableProps) {
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
          {restaurants.map((restaurant: Restaurant) => (
            <RestaurantTableRow
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}

        </tbody>
      </table>
    </div>
  );
}

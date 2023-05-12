import Restaurants from '../type/Restaurants';
import RestaurantsRow from './RestaurantsRow';

type RestaurantsTableProps = {
  restaurants : Restaurants[]
}

export default function RestaurantsTable({ restaurants }:RestaurantsTableProps) {
  return (
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
            <RestaurantsRow key={restaurant.id} restaurant={restaurant} />
          ))
        }
      </tbody>
    </table>
  );
}

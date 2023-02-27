import { TRestaurantsResponse } from '../../types/restaurant';
import RestaurantRow from './RestaurantRow';

type RestaurantsTableProps = {
  restaurants: TRestaurantsResponse[]
}

function RestaurantsTable({ restaurants }: RestaurantsTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ padding: '0 2rem' }}>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>

      <tbody>
        {
          restaurants.map((restaurant) => (
            <RestaurantRow
              key={restaurant.id}
              restaurant={restaurant}

            />
          ))
        }
      </tbody>
    </table>
  );
}

export default RestaurantsTable;

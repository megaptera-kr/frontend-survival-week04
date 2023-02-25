import RestaurantsTableRow from './RestaurantsTableRow';

import Restaurant from '../types/Restaurants';

type RestaurantsTableProps = {
    restaurants: Restaurant[];
  };

function RestaurantTable({ restaurants }: RestaurantsTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ paddingInline: '2rem' }}>
            식당 이름
          </th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant: Restaurant) => (
          <RestaurantsTableRow
            key={restaurant.name}
            restaurant={restaurant}
          />
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;

import RestaurantItem from './RestaurantItem';

import Restaurant from '../types/Restaurant';

type RestaurantTableProps = {
  restaurants: Restaurant[];
};

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ paddingInline: '2rem' }}>
              식당 이름
            </th>
            <th>
              종류
            </th>
            <th>
              메뉴
            </th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <RestaurantItem
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

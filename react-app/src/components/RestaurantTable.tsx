import RestaurantRow from './RestaurantRow';

import filterRestaurants from '../hooks/filterRestaurants';
import useFetchRestaurants from '../hooks/useFetchRestaurants';

type RestaurantTableProps = {
  filterText: string;
  filterCategory: string;
}

export default function RestaurantTable({
  filterText,
  filterCategory,
}: RestaurantTableProps) {
  const restaurants = useFetchRestaurants();

  const filteredRestaurants = filterRestaurants(
    restaurants,
    filterCategory,
    filterText,
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ paddingInline: '2rem' }}>식당이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredRestaurants?.map((restaurant) => (
              <RestaurantRow
                key={restaurant?.id}
                restaurant={restaurant}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

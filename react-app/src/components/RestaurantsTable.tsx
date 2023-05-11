import { Restaurant } from '../types';
import RestaurantRow from './RestaurantRow';

type Props = {
  restaurants: Restaurant[];
}

export default function RestaurantsTable({ restaurants }:Props) {
  const restaurantList = restaurants?.map((restaurant) => (
    <RestaurantRow key={restaurant.id} restaurant={restaurant} />
  ));
  return (
    <table className="table-auto border-collapse">
      <thead>
        <tr className="text-xl">
          <th className="w-1/3 border-2 border-purple-600">식당 이름</th>
          <th className="w-1/4 border-2 border-purple-600">종류</th>
          <th className="w-1/3 border-2 border-purple-600">메뉴</th>
        </tr>
      </thead>
      <tbody>
        {restaurantList}
      </tbody>
    </table>
  );
}

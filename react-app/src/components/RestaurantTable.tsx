import RestaurantRow from './RestaurantRow';

import Restaurant from '../Types/Restaurant';
import Food from '../Types/Food';

type RestaurantTableProps = {
  restaurants: Restaurant[];
  setChoiceFoods: (food: Food) => void;
};

export default function RestaurantTable({
  restaurants,
  setChoiceFoods,
}: RestaurantTableProps) {
  return (
    <div className="RestaurantTable">
      <table>
        <thead>
          <tr>
            <th>식당이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <RestaurantRow
              key={restaurant.name}
              restaurant={restaurant}
              setChoiceFoods={setChoiceFoods}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

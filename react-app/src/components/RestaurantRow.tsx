import Foods from './Foods';

import Restaurant from '../Types/Restaurant';
import Food from '../Types/Food';

type RestaurantRowProps = {
  restaurant: Restaurant;
  setChoiceFoods: (food: Food) => void;
};

export default function RestaurantRow({
  restaurant,
  setChoiceFoods,
}: RestaurantRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <Foods menu={restaurant.menu} setChoiceFoods={setChoiceFoods} />
      </td>
    </tr>
  );
}

import Foods from './Foods';

import Restaurant from '../Types/Restaurant';
import Food from '../Types/Food';

type RestaurantRowProps = {
  restaurant: Restaurant;
  choiceFoods: Food[];
  setChoiceFoods: (food: Food[]) => void;
};

export default function RestaurantRow({
  restaurant,
  choiceFoods,
  setChoiceFoods,
}: RestaurantRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <Foods
          btnName="선택"
          menu={restaurant.menu}
          choiceFoods={choiceFoods}
          setChoiceFoods={setChoiceFoods}
        />
      </td>
    </tr>
  );
}

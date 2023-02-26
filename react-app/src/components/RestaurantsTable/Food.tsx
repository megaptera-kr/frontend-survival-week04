import { TRestaurantMenu } from '../../types/restaurant';

type FoodProps = {
  menu: TRestaurantMenu[]
}

function Food({ menu }: FoodProps) {
  return (
    <ul>
      {
        menu.map((food) => (
          <li key={food.id}>
            {food.name}
            (
            {String(food.price)}
            )
          </li>
        ))
      }
    </ul>
  );
}

export default Food;

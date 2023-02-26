import { HTMLAttributes } from 'react';
import { TRestaurantMenu } from '../../types/restaurant';

type MenuProps = {
  food: TRestaurantMenu
} & HTMLAttributes<Element>;

function Food({ food, children }: MenuProps) {
  return (
    <li key={food.id} className="food">
      <span className="food-price">
        {food.name}
        (
        {`${food.price.toLocaleString()}원`}
        )
      </span>
      {children}
    </li>

  );
}

export default Food;

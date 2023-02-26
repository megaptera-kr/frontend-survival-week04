import { HTMLAttributes } from 'react';
import { TRestaurantMenu } from '../../types/restaurant';

type MenuProps = {
  food: TRestaurantMenu
} & HTMLAttributes<Element>;

function Food({ food, children }: MenuProps) {
  return (
    <li
      className="food"
      style={{
        display: 'flex',
        paddingBlock: '0.5rem',

      }}
    >
      <span style={{ margin: '0 auto' }}>
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

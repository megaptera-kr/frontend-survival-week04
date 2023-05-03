import { ReactNode } from 'react';
import { Food } from '../types/Restaurant';

interface FoodItemProps {
  food: Food;
  children: ReactNode;
}

export default function FoodItem({ food, children }: FoodItemProps) {
  return (
    <li key={food.id} style={{ display: 'flex', paddingBlock: ' 0.5rem' }}>
      <span style={{ margin: '0px auto' }}>
        {`${food.name}(${food.price.toLocaleString()}원)`}
      </span>
      {children}
    </li>
  );
}

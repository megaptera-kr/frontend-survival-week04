import { HTMLAttributes } from 'react';
import Food from '../types/Food';

type FoodItemProps = {
  food: Food;
} & HTMLAttributes<Element>;

export default function FoodItem({ food, children }: FoodItemProps) {
  const { name, price } = food;
  return (
    <div>
      <div
        style={{
          marginBottom: '0.5rem',
        }}
      >
        {name}
        (
        {price.toLocaleString()}
        원)
        {children}
      </div>
    </div>
  );
}

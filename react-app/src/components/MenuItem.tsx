import { HTMLAttributes } from 'react';
import Food from '../types/Food';

type MenuItemProps = {
  food: Food;
} & HTMLAttributes<Element>;
// HTMLAttributes<Element>는 child:ReactNode가 optional로 있어서 확장시 추가적으로 chilren 넣기 가능

export default function MenuItem({ food, children }: MenuItemProps) {
  const { name, price } = food;
  return (
    <li>
      <span>
        {`${name} (${price.toLocaleString()}원)`}
      </span>
      {children}
    </li>
  );
}

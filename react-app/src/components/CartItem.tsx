import { ReactNode } from 'react';
import { Food } from '../types/Restaurant';

interface CartItemProps {
  menu: Food;
  children: ReactNode;
}
export default function CartItem({ menu, children }: CartItemProps) {
  return (
    <li style={{ display: 'flex', paddingBlock: '0.5rem' }}>
      <span style={{ margin: '0px auto' }}>
        {`${menu.name}(${menu.price.toLocaleString()}원)`}
      </span>
      {children}
    </li>
  );
}

import { HTMLAttributes } from 'react';

import Menu from '../types/Menu';

type ReceiptItemProps = {
  food: Menu;
} & HTMLAttributes<Element>;

export default function ReceiptItem({ food, children }: ReceiptItemProps) {
  const { name, price } = food;

  return (
    <li
      style={{
        display: 'flex',
        paddingBlock: '.5rem',
      }}
    >
      <span style={{ margin: '0 auto' }}>
        {name}
        (
        {price.toLocaleString()}
        원)
      </span>
      {children}
    </li>
  );
}

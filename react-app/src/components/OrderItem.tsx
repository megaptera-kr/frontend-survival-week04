import { HTMLAttributes } from 'react';

import MenuType from '../types/MenuType';

type OrderItemProps = {
    menuItem: MenuType;
} & HTMLAttributes<Element>;

export default function OrderItem({ menuItem, children }: OrderItemProps) {
  return (
    <li>
      <span>
        {menuItem.name}
        (
        {menuItem.price}
        원)
      </span>
      {children}
    </li>
  );
}

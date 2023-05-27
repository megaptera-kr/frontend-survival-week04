import { HTMLAttributes } from 'react';
import MenuType from '../types/MenuType';

type MenuItemProps = {
    menuItem: MenuType
} & HTMLAttributes<Element>;

export default function MenuItem({ menuItem }:MenuItemProps) {
  const { name, price } = menuItem;
  return (

    <span>
      {name}
      (
      {price}
      원)
    </span>

  );
}

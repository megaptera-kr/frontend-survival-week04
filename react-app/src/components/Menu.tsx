import { ReactElement } from 'react';
import { MenuType } from '../types/restaurants';

type PropTypes = {
  menu: MenuType;
  children: ReactElement | undefined;
};

export default function Menu({ menu, children }: PropTypes) {
  const price = menu.price.toLocaleString();
  return (
    <li>
      {menu.name}
      (
      {price}
      )
      {children}
    </li>
  );
}

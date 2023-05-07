import { useState } from 'react';
import { Menu, MenuItem } from '../type/menu';

type MenuInfoProps = {
restaurant: Menu,
receipt : MenuItem[],
setReceipt : (value: MenuItem[])=>void
}

export default function MenuInfo({ restaurant, receipt, setReceipt }: MenuInfoProps) {
  const menus = restaurant.menu;
  function handleSelect(e) {
    const { menu } = e;
    const order = [];
    order.push(menu);
    if (JSON.parse(localStorage.getItem('cart'))) {
      order.push(...JSON.parse(localStorage.getItem('cart')));
    }
    localStorage.setItem('cart', JSON.stringify(order));
    setReceipt(order);
  }
  return (
    <td>
      {
        menus.map((menu) => (
          <ol key={`menu${menu.id}`}>
            <span>
              {menu.name}
              (
              {menu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              원)
            </span>
            <button name={`#${menu.name}`} type="button" onClick={() => { handleSelect({ menu }); }}>선택</button>
          </ol>
        ))
      }
    </td>

  );
}

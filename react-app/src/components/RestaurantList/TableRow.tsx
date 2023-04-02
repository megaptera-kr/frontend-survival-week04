import React from 'react';
import { Restaurant } from '../../types';

type Props = {
  restaurant: Restaurant;
}

function TableRow({ restaurant }: Props) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {
            restaurant.menu.map((menu) => (
              <li key={menu.id}>
                <span>{`${menu.name}(${menu.price.toLocaleString()}원)`}</span>
                <button type="button" name={menu.name}>선택</button>
              </li>
            ))
          }
        </ul>
      </td>
    </tr>
  );
}

export default TableRow;

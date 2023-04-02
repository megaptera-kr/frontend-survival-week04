import React from 'react';
import { Restaurant } from '../../types';
import TableRow from './TableRow';

type Props = {
  restaurants: Restaurant[];
}

function Table({ restaurants }: Props) {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {
            restaurants.map((restaurant) => (
              <TableRow key={restaurant.id} restaurant={restaurant} />
            ))
          }
        </tbody>
      </table>
    </section>
  );
}

export default Table;

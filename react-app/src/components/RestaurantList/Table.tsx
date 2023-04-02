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
            <th style={{ width: '100px', textAlign: 'left' }}>식당 이름</th>
            <th style={{ width: '50px', textAlign: 'left' }}>종류</th>
            <th style={{ textAlign: 'left' }}>메뉴</th>
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

import { Menu, Restaurant } from '../../types';
import TableRow from './TableRow';

type Props = {
  restaurants: Restaurant[];
  onClickAddOrder: (menu: Menu) => void;
}

function Table({ restaurants, onClickAddOrder }: Props) {
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
              // eslint-disable-next-line max-len
              <TableRow key={restaurant.id} restaurant={restaurant} onClickAddOrder={onClickAddOrder} />
            ))
          }
        </tbody>
      </table>
    </section>
  );
}

export default Table;

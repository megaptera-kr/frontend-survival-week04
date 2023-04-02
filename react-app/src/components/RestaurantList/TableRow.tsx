import { Menu, Restaurant } from '../../types';

type Props = {
  restaurant: Restaurant;
  onClickAddOrder: (menu: Menu) => void;
}

function TableRow({ restaurant, onClickAddOrder }: Props) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {
            restaurant.menu.map((menu) => (
              <li key={menu.id}>
                <span>{`${menu.name}(${menu.price.toLocaleString()}원)`}</span>
                <button type="button" name={menu.name} onClick={() => onClickAddOrder(menu)}>선택</button>
              </li>
            ))
          }
        </ul>
      </td>
    </tr>
  );
}

export default TableRow;

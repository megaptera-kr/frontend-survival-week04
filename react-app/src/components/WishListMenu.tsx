import { ChangeEvent } from 'react';
import Menu from '../types/Menu';

type WishListMenuProps = {
  menu : Menu;
}

export default function WishListMenu({
  menu,
}: WishListMenuProps) {
  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    console.log('change event');
  };

  return (
    <tr key={menu.id}>
      <td>{menu.name}</td>
      <td>{`${menu.price.toLocaleString()}원`}</td>
      <td>
        <button type="button">-</button>
        <input
          type="number"
          min="1"
          max="100"
          value="1"
          disabled
          onChange={handleChange}
        />
        <button type="button">+</button>
      </td>
      <td>
        <button type="button">취소</button>
      </td>
    </tr>
  );
}

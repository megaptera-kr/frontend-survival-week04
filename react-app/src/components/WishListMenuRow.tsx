import { ChangeEvent } from 'react';
import useWishList from '../hooks/useWishList';
import MenuWithCount from '../types/MenuWithCount';

type WishListMenuRowProps = {
  menu : MenuWithCount;
}

export default function WishListMenuRow({
  menu,
}: WishListMenuRowProps) {
  const { deleteAllMenuById } = useWishList();
  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    console.log('change event');
  };

  const handleCancelClick = () => {
    deleteAllMenuById(menu.id);
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
          value={menu.count}
          disabled
          onChange={handleChange}
        />
        <button type="button">+</button>
      </td>
      <td>
        <button type="button" onClick={handleCancelClick}>취소</button>
      </td>
    </tr>
  );
}

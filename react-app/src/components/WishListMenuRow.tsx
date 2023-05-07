import useWishList from '../hooks/useWishList';
import MenuWithCount from '../types/MenuWithCount';

type WishListMenuRowProps = {
  menu : MenuWithCount;
}

export default function WishListMenuRow({
  menu,
}: WishListMenuRowProps) {
  const { deleteAllMenuById, updateMenuCount } = useWishList();

  const handleIncrease = () => (updateMenuCount(menu, true));

  const handleDecrease = () => (updateMenuCount(menu, false));

  const handleCancelClick = () => {
    deleteAllMenuById(menu.id);
  };

  return (
    <tr key={menu.id}>
      <td>{menu.name}</td>
      <td>{`${menu.price.toLocaleString()}원`}</td>
      <td>
        <button type="button" onClick={handleDecrease} disabled={menu.count === 1}>-</button>
        <input
          type="number"
          min="1"
          max="100"
          value={menu.count}
          disabled
        />
        <button type="button" onClick={handleIncrease}>+</button>
      </td>
      <td>
        <button type="button" onClick={handleCancelClick}>취소</button>
      </td>
    </tr>
  );
}

import { ChangeEvent } from 'react';
import useWishList from '../hooks/useWishList';
import aggregateMenu from '../utils/aggregateMenu';

export default function WishListTable() {
  const [wishList, updateWishList] = useWishList();

  const menuList = aggregateMenu(wishList.menu);

  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    console.log('change event');
  };

  return (
    <table>
      <thead>
        <tr>
          <th>메뉴</th>
          <th>가격</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody>
        {menuList.map((menuItem) => (
          <tr key={menuItem.id}>
            <td>{menuItem.name}</td>
            <td>{`${menuItem.price.toLocaleString()}원`}</td>
            <td>
              <button type="button">-</button>
              <input
                type="number"
                min="1"
                max="100"
                value={menuItem.count}
                disabled
                onChange={handleChange}
              />
              <button type="button">+</button>
            </td>
            <td>
              <button type="button">취소</button>
            </td>
          </tr>

        ))}
      </tbody>
    </table>
  );
}

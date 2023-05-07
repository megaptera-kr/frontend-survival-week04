import { ChangeEvent } from 'react';
import useWishList from '../hooks/useWishList';

export default function WishListTable() {
  const [wishList, updateWishList] = useWishList();

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
        {wishList.menu.map((menuItem) => (
          <tr key={menuItem.id}>
            <td>{menuItem.name}</td>
            <td>{`${menuItem.price.toLocaleString()}원`}</td>
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

        ))}
        <tr>
          <td>
            김치찌개
          </td>
          <td>8000원</td>
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
      </tbody>
    </table>
  );
}

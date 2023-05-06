import { ChangeEvent } from 'react';

export default function WishListTable() {
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

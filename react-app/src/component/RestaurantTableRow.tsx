import Restaurant from '../types/RestaurantType';

type RestaurantProps = {
  restaurant: Restaurant;
};

function RestaurantTableRow({ restaurant }: RestaurantProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          <li>
            <span>짜장면(8,000)</span>
            <button type='button'>선택</button>
          </li>
          <li>
            <span>짬뽕(8,000)</span>
            <button type='button'>선택</button>
          </li>
          <li>
            <span>차돌짬뽕(9,000원)</span>
            <button type='button'>선택</button>
          </li>
        </ul>
      </td>
    </tr>
  );
}

export default RestaurantTableRow;

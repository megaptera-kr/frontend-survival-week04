import MenuList from './MenuList';
import restaurantType from './types/restaurantType';

export default function RestaurantTable(
  {
    restaurants,
  }: {restaurants: restaurantType[]},
) {
  return (
    <table>
      <thead>
        <tr>
          <th>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {
          restaurants.length ? (
            restaurants.map((el) => (
              <tr
                key={el.name}
              >
                <td>{el.name}</td>
                <td>{el.category}</td>
                <td>
                  <MenuList menu={el.menu} />
                </td>
              </tr>
            ))
          )
            : null
        }
      </tbody>
    </table>
  );
}

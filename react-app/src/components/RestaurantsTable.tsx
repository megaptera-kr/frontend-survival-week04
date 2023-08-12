import { IRestaurant } from '../types/restaurants';

type RestaurantsTableProps = {
  restaurants: IRestaurant[];
};

export default function RestaurantsTable({
  restaurants,
}: RestaurantsTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th
            style={{
              paddingInline: '2rem',
            }}
          >
            식당 이름

          </th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {
          restaurants.map(({
            id, name, category, menu,
          }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{category}</td>
              <td>
                <ul>
                  {
                    menu.map(({ id: menuId, name: menuName, price }) => (
                      <li
                        key={menuId}
                        style={{
                          display: 'flex',
                          paddingBlock: '0.5rem',
                        }}
                      >
                        <span
                          style={{ margin: '0 auto' }}
                        >
                          {`${menuName}(${price}원)`}
                        </span>
                      </li>
                    ))
                  }
                </ul>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

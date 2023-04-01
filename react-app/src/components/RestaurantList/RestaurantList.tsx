type Restaurant = {
  id: string;
  category: string;
  name: string;
  menu: {
    id: string;
    name: string;
    price: number;
  }[];
}

type Props = {
  restaurants: Restaurant[];
}

function RestaurantList({ restaurants = [] }: Props) {
  return (
    <div>
      <section>
        <label>
          검색
          <input
            style={{
              marginLeft: '1rem',
            }}
            type="text"
            placeholder="식당 이름"
          />
        </label>
      </section>
      <ul style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        padding: '0',
        listStyle: 'none',
      }}
      >
        {
          ['전체', '중식', '한식', '일식'].map((category) => (
            <li key={category}>
              <button type="button">{category}</button>
            </li>
          ))
        }
      </ul>
      <section>
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
              restaurants.map((restaurant) => (
                <tr key={restaurant.id}>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.category}</td>
                  <td>
                    <ul>
                      {
                        restaurant.menu.map((menu) => (
                          <li key={menu.id}>
                            <span>{`${menu.name}(${menu.price.toLocaleString()}원)`}</span>
                            <button type="button" name={menu.name}>선택</button>
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
      </section>
    </div>
  );
}

export default RestaurantList;

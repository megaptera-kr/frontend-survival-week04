/**
2. 식당 목록에 있는 음식들을 담고, 주문할 수 있는 점심 바구니를 만들어 주세요.
    - 사용자는 식당의 메뉴별로 붙어있는 선택 버튼을 통해 점심 바구니에 음식을 담을 수 있다.
    - 사용자는 동일한 메뉴를 담을 수 있다.
    - 사용자는 점심 바구니에 담긴 메뉴의 총 가격을 주문버튼에서 볼 수 있다.
    - 사용자는 주문 버튼을 통해 주문할 수 있다. (서버에 주문 생성 요청 `/POST orders`)
    - 사용자는 주문을 완료하면 아래에 영수증을 볼 수 있다.
        - 사용자는 영수증에서 주문번호와 주문한 음식 목록, 총 가격을 볼 수 있다.
        - 영수증은 5초뒤에 사라진다.
 */

import useFilteredRestaurants from './hooks/useFilteredRestaurants';
import { RESTAURANTS_CATEGORY, RestaurantCategoryWithAll } from './types/restaurants';

export default function App() {
  const { filteredRestaurants, filter, setFilter } = useFilteredRestaurants();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, name: e.target.value });
  };

  const handleCategoryClick = (category: RestaurantCategoryWithAll) => {
    setFilter({ ...filter, category });
  };

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <h2>점심 바구니</h2>
      <button type="button">합계: 999원 주문</button>
      <label style={{ display: 'flex', gap: '0.5rem', margin: '1rem 0' }}>
        검색
        <input placeholder="식당 이름" onChange={handleSearch} maxLength={20} />
      </label>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        {['전체', ...RESTAURANTS_CATEGORY].map((category) => (
          <button style={{ backgroundColor: category === filter.category ? 'gray' : undefined }} type="button" key={category} onClick={() => handleCategoryClick(category as RestaurantCategoryWithAll)}>
            {category}
          </button>
        ))}
      </nav>
      <main>
        <table>
          <thead>
            <tr>
              <th>식당 이름</th>
              <th>종류</th>
              <th>메뉴</th>
            </tr>
          </thead>
          <tbody>
            {filteredRestaurants.map(({
              category, id, menu: menus, name,
            }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{category}</td>
                <td>
                  {menus.map(({ id, name, price }) => (

                    <ul
                      key={id}
                      style={{
                        display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '1rem',
                      }}
                    >
                      <li style={{ listStyle: 'none', textAlign: 'center' }}>
                        {name}
                        (
                        {price}
                        원)
                      </li>
                      <button type="button">선택</button>
                    </ul>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

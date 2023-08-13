import { useFetch } from 'usehooks-ts';

const CATEGORIES = [
  {
    id: 0,
    name: '전체',
  },
  {
    id: 1,
    name: '중식',
  },
  {
    id: 2,
    name: '한식',
  },
  {
    id: 3,
    name: '일식',
  },
] as const;

interface RestaurantsData {
  restaurants: {
    id: string
    category: string
    name: string,
    menu: { id: string, name: string, price: number }[]
  }[]
}

export default function App() {
  const { data: restaurantsData } = useFetch<RestaurantsData>('http://localhost:3000/restaurants');

  return (
    <div>
      <header>
        <h1>
          푸드코트 키오스크
        </h1>

        <div>
          <h3>점심 바구니</h3>
          <button type="button">
            합계:
            {' '}
            {0}
            원 주문
          </button>
        </div>

        <div>
          <label>
            검색
            <input type="text" placeholder="식당 이름" />
          </label>
        </div>

        <div>
          {CATEGORIES.map(({ id, name }) => <button type="button" key={`category_tab_${id}`}>{name}</button>)}
        </div>
        <div />
      </header>

      <table>
        <thead>
          <tr>
            <td>식당이름</td>
            <td>종류</td>
            <td>메뉴</td>
          </tr>
        </thead>
        <tbody>
          {(restaurantsData?.restaurants ?? [])?.map(({
            id, name, category, menu,
          }) => (
            <tr key={`restaurants_${id}`}>
              <td>{name}</td>
              <td>{category}</td>

              <td>
                {menu.map((item) => (
                  <div key={`${item.name}_menu_${item.id}`}>
                    {`${name} (${item.price})`}
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

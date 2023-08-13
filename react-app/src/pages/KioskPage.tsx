import { useEffect, useState } from 'react';

import KioskTable from './KioskTable';

import { RestaurantsData, useFetchRestaurants } from './hooks/useFetchRestaurants';
import orderRestaurantsMenus, { PostOrdersResponse } from './hooks/useOrderRestaurantsMenus';

/** 메뉴 카테고리 목록 */
export const CATEGORIES = [
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
];

export type MenuType = RestaurantsData['restaurants'][number]['menu'][number]

function KioskPage() {
  const { data: restaurantsData } = useFetchRestaurants();

  const [filteredRestaurantsData, setFilteredRestaurantsData] = useState<RestaurantsData['restaurants']>([]);
  const [selectedMenus, setSelectedMenus] = useState<MenuType[]>([]);
  const [orderedMenus, setOrderedMenus] = useState<PostOrdersResponse | null>(null);

  const [query, setQuery] = useState('');

  const handleChangeQuery = (value: string) => {
    setQuery(value);
  };

  const addSelectedMenus = (menu: MenuType) => {
    setSelectedMenus((prev) => [...prev, menu]);
  };

  const handleClickOrderButton = async () => {
    if (selectedMenus.length === 0) return;

    try {
      const data = await orderRestaurantsMenus({
        menu: selectedMenus,
        totalPrice: selectedMenus.reduce((result, { price }) => result + price, 0),
      });

      setOrderedMenus(data);
    } catch (err) {
      // ...
    }
  };

  const handleClickCancelMenuButton = (index: number) => {
    const newSelectedMenu = [...selectedMenus.slice(0, index), ...selectedMenus.slice(index + 1)];

    setSelectedMenus(newSelectedMenu);
  };

  useEffect(() => {
    console.log(orderedMenus);

    const timer = setTimeout(() => {
      setOrderedMenus(null);
      setSelectedMenus([]);
    }, 5_000);

    return () => {
      clearTimeout(timer);
    };
  }, [orderedMenus]);

  useEffect(() => {
    let newData = [...restaurantsData?.restaurants ?? []];

    if (query) {
      newData = newData.map((item) => {
        /** 식당 이름 */
        if (item.name.includes(query)) {
          return item;
        }

        /** 메뉴 카테고리 */
        if (item.category.includes(query)) {
          return item;
        }

        /** 메뉴 이름 */
        const filteredMenu = item.menu.filter(({ name }) => name.includes(query));
        if (filteredMenu.length > 0) {
          return {
            ...item,
            menu: filteredMenu,
          };
        }

        return null;
      }).filter((item) => !!item) as RestaurantsData['restaurants'];
    }

    setFilteredRestaurantsData(newData);
  }, [restaurantsData, query]);

  return (
    <>
      <header>
        <h1>
          푸드코트 키오스크
        </h1>
      </header>

      <div>
        <label>
          <h3>점심 바구니</h3>
          {' '}
          <button type="button" onClick={handleClickOrderButton}>
            {`합계: ${selectedMenus.reduce((result, { price }) => result + price, 0)}원 주문`}
          </button>
        </label>

        <div>
          {selectedMenus.map(({ id, name, price }, index) => (
            <div key={`selected_menu_${id}`}>
              <span>{`${name} ${price.toLocaleString()}`}</span>
              {' '}
              <button type="button" onClick={() => handleClickCancelMenuButton(index)}>취소</button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label>
          검색
          {' '}
          <input type="text" placeholder="식당 이름" onChange={({ target: { value } }) => handleChangeQuery(value)} />
        </label>
      </div>

      <div>
        {CATEGORIES.map(({ id, name }) => (
          <button
            type="button"
            key={`tab_${id}`}
            onClick={() => {
              handleChangeQuery(name === '전체' ? '' : name);
            }}
          >
            {name}
          </button>
        ))}
      </div>

      <KioskTable restaurantsData={filteredRestaurantsData} onAddSelectedMenus={addSelectedMenus} />

      <div>

        {orderedMenus ? (
          <div>
            <div key={orderedMenus.id}>
              <h3>영수증</h3>
              <h4>
                주문번호:
                {orderedMenus.id}
              </h4>

              {orderedMenus.menu.map((item) => (
                <div key={`${item.name}_menu_${item.id}`}>
                  <span>{`${item.name} (${item.price.toLocaleString()})원`}</span>
                </div>
              ))}

              <h4>
                총 가격:
                {' '}
                {orderedMenus.menu.reduce((result, { price }) => result + price, 0)}
              </h4>
            </div>
          </div>
        ) : (
          <div>
            [영수증 나오는 곳]
          </div>
        )}
      </div>
    </>
  );
}

export default KioskPage;

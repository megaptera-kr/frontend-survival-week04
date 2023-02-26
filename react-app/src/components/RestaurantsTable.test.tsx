import { render, screen } from '@testing-library/react';
import Menu from '../types/Menu';
import Restaurant from '../types/Restaurant';

import RestaurantsTable from './RestaurantsTable';

const context = describe;

let restaurants: Restaurant[];
let selectedMenus: Menu[];

const setSelectedMenus = jest.fn();

describe('RestaurantsTable', () => {
  function renderRestaurantsTable() {
    render(<RestaurantsTable
      restaurants={restaurants}
      selectedMenus={selectedMenus}
      setSelectedMenus={setSelectedMenus}
    />);
  }

  context('사용자가 페이지에 접속하면', () => {
    beforeEach(() => {
      restaurants = [
        {
          id: '1',
          category: '중식',
          name: '메가반점',
          menu: [
            { id: '1', name: '짜장면', price: 8000 },
            { id: '2', name: '짬뽕', price: 8000 },
            { id: '3', name: '차돌짬뽕', price: 9000 },
            { id: '4', name: '탕수육', price: 14000 },
          ],
        },
        {
          id: '2',
          category: '한식',
          name: '메리김밥',
          menu: [
            { id: '5', name: '김밥', price: 3500 },
            { id: '6', name: '참치김밥', price: 4500 },
            { id: '7', name: '제육김밥', price: 5000 },
            { id: '8', name: '훈제오리김밥', price: 5500 },
          ],
        },
      ];
    });

    it('데이터를 기반으로 레스토랑들의 목록 테이블이 render된다', () => {
      renderRestaurantsTable();

      screen.getByText('식당 이름');
      screen.getByText('종류');
      screen.getByText('메뉴');
      screen.getByText('메가반점');
    });
  });
});

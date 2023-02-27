import { render, screen } from '@testing-library/react';
import Menu from '../types/Menu';

import RestaurantRow from './RestaurantRow';

const restaurant = {
  id: '3',
  category: '일식',
  name: '혹등고래카레',
  menu: [
    { id: '9', name: '기본카레', price: 9000 },
    { id: '10', name: '가라아게카레', price: 14000 },
    { id: '11', name: '소시지카레', price: 13000 },
    { id: '12', name: '돈까스카레', price: 14000 },
    { id: '13', name: '닭가슴살카레', price: 13000 },
  ],
};

let selectedMenus: Menu[];

const setSelectedMenus = jest.fn();

const context = describe;

describe('RestaurantRow', () => {
  function renderRestaurantRow() {
    render(<RestaurantRow
      restaurant={restaurant}
      selectedMenus={selectedMenus}
      setSelectedMenus={setSelectedMenus}
    />);
  }

  context('사용자가 페이지에 접속했을 때', () => {
    it('혹등고래카레의 정보가 테이블의 row에 render된다', () => {
      renderRestaurantRow();

      screen.getByText('혹등고래카레');
      screen.getByText('가라아게카레(14,000원)');
      screen.getAllByText('선택');
    });
  });
});

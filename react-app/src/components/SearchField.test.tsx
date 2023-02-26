import { render, screen } from '@testing-library/react';

import SearchField from './SearchField';

import Restaurant from '../types/Restaurant';

let restaurants: Restaurant[];
let filterText: string;

const setFilterText = jest.fn();
const setFilterCategory = jest.fn();

const context = describe;

describe('SearchField', () => {
  function renderSearchField() {
    render(<SearchField
      restaurants={restaurants}
      filterText={filterText}
      setFilterText={setFilterText}
      setFilterCategory={setFilterCategory}
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
      ];
    });
    it('검색 기능 필드가 render된다.', () => {
      renderSearchField();

      screen.getByLabelText('검색');
      screen.getByPlaceholderText('식당 이름');
      screen.getByText('전체');
    });
  });
});

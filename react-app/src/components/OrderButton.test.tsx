import { render, screen } from '@testing-library/react';

import OrderButton from './OrderButton';

import Menu from '../types/Menu';

let selectedMenus: Menu[];

const setSelectedMenus = jest.fn();
const setReceipt = jest.fn();

const context = describe;

describe('OrderButton', () => {
  function renderOrderButton() {
    render(<OrderButton
      selectedMenus={selectedMenus}
      setSelectedMenus={setSelectedMenus}
      setReceipt={setReceipt}
    />);
  }

  context('선택한 메뉴가 없으면', () => {
    beforeEach(() => {
      selectedMenus = [];
    });

    it('order 버튼이 합계: 0원 주문으로 render된다', () => {
      renderOrderButton();

      screen.getByText('합계: 0원 주문');
    });
  });

  context('선택한 메뉴가 있으면', () => {
    beforeEach(() => {
      selectedMenus = [
        { id: '5', name: '김밥', price: 3500 },
        { id: '6', name: '참치김밥', price: 4500 },
      ];
    });

    it('order 버튼이 합계: 총 가격원 주문으로 render된다', () => {
      renderOrderButton();

      screen.getByText('합계: 8,000원 주문');
    });
  });
});

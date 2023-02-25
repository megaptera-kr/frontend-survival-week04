import { render, screen } from '@testing-library/react';

import Receipt from './Receipt';

const context = describe;

describe('Receipt', () => {
  function renderReceipt() {
    render(<Receipt />);
  }

  context('점심 바구니의 아이템들을 주문하면', () => {
    it('영수증이 출력되었다가 5초 뒤에 사라진다', () => {
      renderReceipt();

      screen.getByText('영수증');
      screen.getByText('주문번호');
      screen.getByText('주문목록');
      screen.getByText(/총 가격:/);
    });
  });
});

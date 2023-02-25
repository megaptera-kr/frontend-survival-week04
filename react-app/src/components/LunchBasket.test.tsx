import { render, screen } from '@testing-library/react';

import LunchBasket from './LunchBasket';

const context = describe;

describe('LunchBasket', () => {
  function renderLunchBasket() {
    render(<LunchBasket />);
  }

  context('사용자가 페이지에 접속하면', () => {
    it('점심 바구니 기본 UI가 보인다', () => {
      renderLunchBasket();

      screen.getByText('점심 바구니');
    });
  });
});

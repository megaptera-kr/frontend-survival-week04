import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Cart from '../components/Cart';
import { restaurant } from './data/restaurants';

const context = describe;

describe('Cart', () => {
  const { menu } = restaurant;
  const clearCart = jest.fn();
  const orderCart = jest.fn();

  it('render Cart without crash', () => {
    render(<Cart
      cartItems={menu}
      clearCart={clearCart}
      orderCart={orderCart}
    />);

    expect(screen.getByRole('heading', { name: '점심 바구니' })).toBeInTheDocument();
    expect(screen.getByText('총 주문 금액')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '취소하기' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '주문하기' })).toBeInTheDocument();
  });

  context('when cart is empty', () => {
    it('total amount is 0', () => {
      render(<Cart
        cartItems={[]}
        clearCart={clearCart}
        orderCart={orderCart}
      />);
      expect(screen.getByText('합계: 0원 주문')).toBeInTheDocument();
    });
  });

  context('when order button is clicked', () => {
    it('orderCart is called', async () => {
      render(<Cart
        cartItems={menu}
        clearCart={clearCart}
        orderCart={orderCart}
      />);

      const orderBtn = screen.getByLabelText('주문하기');
      await userEvent.click(orderBtn);

      expect(orderCart).toHaveBeenCalled();
    });
  });

  context('when cancel button is clicked', () => {
    it('clearCart is called', async () => {
      render(<Cart
        cartItems={menu}
        clearCart={clearCart}
        orderCart={orderCart}
      />);

      const cancelBtn = screen.getByRole('button', { name: '취소하기' });
      await userEvent.click(cancelBtn);

      expect(clearCart).toHaveBeenCalled();
    });
  });
});

import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import Cart from '../components/Cart';
// import CartHeader from '../components/CartHeader';
// import CartTable from '../components/CartTable';

jest.mock('../components/CartHeader');
jest.mock('../components/CartTable');

// const context = describe;

// TODO 스토리지 목킹 + 훅 모킹.. 학습하기
describe('Cart', () => {
  const createReceipts = jest.fn();

  it('render Cart without crash', async () => {
    render(<Cart createReceipts={createReceipts} />);

    // await screen.findAllByRole('cell');

    expect(screen.getByRole('heading', { name: '점심 바구니' })).toBeInTheDocument();
    // expect(screen.getByRole('button', { name: '취소하기' })).toBeInTheDocument();
    // expect(screen.getByRole('button', { name: '주문하기' })).toBeInTheDocument();
  });

  // context('when cart is empty', () => {
  //   it('total amount is 0', () => {
  //     render(<Cart createReceipts={createReceipts} />);
  //     expect(screen.getByText('합계: 0원 주문')).toBeInTheDocument();
  //   });
  // });

  // context('when order button is clicked', () => {
  //   it('orderCart is called', async () => {
  //     render(<Cart createReceipts={createReceipts} />);

  //     const orderBtn = screen.getByLabelText('주문하기');
  //     await userEvent.click(orderBtn);

  //     expect(createReceipts).toHaveBeenCalled();
  //   });
  // });

  // context('when cancel button is clicked', () => {
  //   it('clearCart is called', async () => {
  //     render(<Cart createReceipts={createReceipts} />);

  //     const cancelBtn = screen.getByRole('button', { name: '취소하기' });
  //     await userEvent.click(cancelBtn);

  //     expect(CartHeader.mock.calls).toHaveBeenCalled();
  //   });
  // });
});

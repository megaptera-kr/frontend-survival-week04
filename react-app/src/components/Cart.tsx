import Foods from './Foods';

import Food from '../types/Food';

import useCart from '../hooks/useCart';

import sumPrice from '../utils/sumPrice';

type CartProps = {
  order: (cart: Food[]) => void;
};

function Cart({ order }: CartProps) {
  const { cart } = useCart();

  const total = sumPrice(cart);

  const handleClick = async () => {
    order(cart);
  };

  return (
    <div>
      <h2>점심 바구니</h2>
      <Foods foods={cart} button="삭제" />
      <button type="button" onClick={handleClick}>
        {`합계 ${total.toLocaleString()}원 주문`}
      </button>
    </div>
  );
}

export default Cart;

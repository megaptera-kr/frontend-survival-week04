import { useLocalStorage } from 'usehooks-ts';
// import fetch from 'node-fetch';
import useCart from '../hooks/useCart';
import Foods from './Foods';

export default function Cart({ setReceipt }) {
  const { cart } = useCart();
  const setCart = useLocalStorage('cart', [])[1];
  const totalPrice = cart.reduce((sum, food) => sum + food.price, 0);

  const handleClickOrder = async () => {
    const url = 'http://localhost:3000/orders';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu: cart, totalPrice }),
    });
    const orders = await response.json();

    setReceipt(orders);
    setCart([]);
  };

  return (
    <div>
      <h2>점심 바구니</h2>
      <ul>
        <Foods menu={cart} buttonType="취소" />
      </ul>
      <button type="button" onClick={handleClickOrder}>
        합계:
        {' '}
        {totalPrice.toLocaleString()}
        원 주문
      </button>
    </div>
  );
}

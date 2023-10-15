import {
  Dispatch, SetStateAction,
} from 'react';
import CartList from './CartList';
import Menu from '../types/Menu';
import useTotalPrice from '../hooks/useTotalPrice';
import { OrderType } from '../types/Order';
import fetchOrders from '../utils/fetchOrders';

type CartFieldProps = {
  cartList: Menu[]
  setCartList: Dispatch<SetStateAction<Menu[]>>
  setOrder: Dispatch<SetStateAction<OrderType>>
  setIsOrder: (value: boolean) => void
}

export default function CartField({
  cartList, setCartList, setOrder, setIsOrder,
}: CartFieldProps) {
  const totalPrice = useTotalPrice(cartList || []);

  const handleClickOrderButton = async () => {
    const order = await fetchOrders({ menu: cartList, totalPrice: totalPrice.toString() });
    setCartList([]);
    setIsOrder(true);
    setOrder(order);
  };

  return (
    <div
      style={{
        marginBottom: '3rem',
      }}
    >
      <h2>점심 바구니</h2>
      {
        cartList && <CartList cartList={cartList} setCartList={setCartList} />
      }
      <button
        type="button"
        onClick={handleClickOrderButton}
      >
        합계:
        {' '}
        {totalPrice.toLocaleString()}
        원 주문
      </button>
    </div>
  );
}

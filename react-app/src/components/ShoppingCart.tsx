import { useState } from 'react';
import { useInterval } from 'usehooks-ts';

import ShoppingCartItems from './ShoppingCartItems';

import calculateTotalPrice from '../utils/calculateTotalPrice';
import requestPostOrders from '../utils/requestPostOrders';

import MenuItem from '../types/MenuItem';

type ShoppingCartProps = {
  cartItems: MenuItem[];
  setCartItems: React.Dispatch<React.SetStateAction<MenuItem[]>>
  setResponseReceipt: React.Dispatch<React.SetStateAction<undefined>>;
  isPlaying: boolean;
  setPlaying: (value: boolean) => void;
}

export default function ShoppingCart({
  cartItems,
  setCartItems,
  setResponseReceipt,
  isPlaying,
  setPlaying,
}: ShoppingCartProps) {
  const totalPrice = calculateTotalPrice(cartItems);

  const [count, setCount] = useState<number>(0);
  const delay = 1000;

  useInterval(
    () => {
      setCount(count + 1);
      if (count >= 4) {
        setPlaying(false);
      }
    },
    isPlaying && count < 5 ? delay : null,
  );

  const handleClick = (
    handleClickCartItems: MenuItem[],
    handleClickTotalPrice: number,
  ) => {
    setCount(0);
    setPlaying(true);

    requestPostOrders(handleClickCartItems, handleClickTotalPrice).then((data) => {
      setResponseReceipt(data);
    });

    setCartItems([]);
  };

  return (
    <div className="shopping-cart">
      <h2>점심 바구니</h2>
      <ShoppingCartItems
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <button
        className="order-button"
        type="button"
        onClick={() => {
          handleClick(cartItems, totalPrice);
        }}
      >
        합계:
        {' '}
        {totalPrice.toLocaleString()}
        원 주문
      </button>
    </div>
  );
}

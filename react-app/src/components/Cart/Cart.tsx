import { useState } from 'react';
import { MenuInterface } from '../../Interfaces/Restaurant.interface';

interface PostData {
  menu: MenuInterface[]
  totalPrice: number
}

interface CartProps {
  menu: MenuInterface[]
  totalPrice: number
  handleSubmit: (postData: PostData) => void
}


function Cart({ menu, totalPrice, handleSubmit }: CartProps) {
  const onSubmit = async () => {
    const postData: PostData = {
      menu,
      totalPrice,
    };
    handleSubmit(postData)
  };
  return (
    <div>
      <h3>점심 바구니</h3>
      <ul>
        {menu.map((item) => (
          <li key={`cart_${item.id}`}>
            {item.name}
            (
            {item.price}
            {' '}
            원)
          </li>
        ))}
      </ul>
      <button type="button" onClick={onSubmit}>
        합계: {totalPrice.toLocaleString()}원 주문
      </button>
    </div>
  );
}

export default Cart;

import { useEffect, useState } from 'react';
import { useInterval } from 'usehooks-ts';
import { MenuItem } from '../type/menu';

type PostFieldProps = {
receipt : MenuItem[],
setReceipt : (value:MenuItem[])=>void
}

export default function PostField({ receipt, setReceipt }:PostFieldProps) {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    let price = 0;
    receipt.forEach((menu) => {
      price += menu.price;
    });
    setTotalPrice(price);
  }, [receipt]);
  function handlePost() {
    const posting = JSON.parse(localStorage.getItem('cart'));
    localStorage.setItem('cart', JSON.stringify(null));
    localStorage.setItem('receipt', JSON.stringify(posting));
    setReceipt([]);

    setTimeout(() => {
      localStorage.setItem('receipt', JSON.stringify(null));
    }, 7000);
  }
  function onSubmitHandler() {
    fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(receipt),
    });
  }

  return (
    <div>
      <button type="submit" onClick={handlePost} onSubmit={onSubmitHandler}>
        합계:
        {' '}
        {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        원 주문
      </button>
    </div>
  );
}

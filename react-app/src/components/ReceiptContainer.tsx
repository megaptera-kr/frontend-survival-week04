import { useState } from 'react';
import { useInterval, useLocalStorage, useEffectOnce } from 'usehooks-ts';
import orderInitialValue from '../utils/initialValue';
import { Order } from '../types';

export default function ReceiptContainer() {
  const [receipt, setReceipt] = useLocalStorage<Order>('receipt', orderInitialValue);

  useInterval(
    () => {
      setReceipt(orderInitialValue);
    },
    receipt.id.length > 0 ? 5000 : null,
  );
  return receipt.id.length <= 0 ? (
    <div>[영수증 나오는 곳]</div>
  ) : (
    <div>
      <h3>영수증</h3>
      <h4>주문번호</h4>
      <p>{receipt.id}</p>
      <h4>주문목록</h4>
      <ul>
        {receipt.menu.map((menu) => (
          <li key={menu.id}>
            <div>
              {menu.name}
              (
              {menu.price.toLocaleString()}
              원)
            </div>
          </li>
        ))}
      </ul>
      <p>
        총 가격:
        {' '}
        {receipt.totalPrice.toLocaleString()}
        원
      </p>
    </div>
  );
}

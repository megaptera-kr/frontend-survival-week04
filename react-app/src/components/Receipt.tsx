import { useInterval } from 'usehooks-ts';
import { Key } from 'react';
import Food from '../types/Food';

export default function Receipt({ receipt, setReceipt }) {
  useInterval(
    () => {
      setReceipt({});
    },
    receipt.id ? 5_000 : null,
  );

  return (
    <>
      {receipt.id
        ? (
          <div>
            <h2>영수증</h2>
            <h3>주문번호</h3>
            <p>{receipt.id}</p>
            <h3>주문목록</h3>
            {receipt.menu.map((food: Food) => (
              <p key={food.id}>{`${food.name} (${food.price.toLocaleString()}원)`}</p>
            ))}
            <p>
              총 가격:
              {' '}
              {receipt.totalPrice.toLocaleString()}
              원
            </p>
          </div>
        )
        : <p>[영수증 나오는 곳]</p> }
    </>
  );
}

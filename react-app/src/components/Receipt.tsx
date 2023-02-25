import { useInterval } from 'usehooks-ts';

import ReceiptData from '../types/ReceiptData';

type ReceiptProps = {
  receiptData: ReceiptData | null;
  setReceiptData: (value:ReceiptData | null) => void;
};

export default function Receipt({ receiptData, setReceiptData }: ReceiptProps) {
  if (!receiptData) return <p>[영수증 나오는 곳]</p>;

  useInterval(() => {
    setReceiptData(null);
  }, 5_000);

  return (
    <>
      <h2>영수증</h2>
      <div>
        <h3>주문번호</h3>
        <span>{receiptData.id}</span>
      </div>
      <div>
        <h3>주문목록</h3>
        <ul>
          {receiptData.menu.map((menu) => (
            <li key={menu.id}>
              {menu.name}
              (
              {menu.price.toLocaleString()}
              원)
            </li>
          ))}
        </ul>
      </div>
      <p>
        총 가격:
        {' '}
        {receiptData.totalPrice.toLocaleString()}
        원
      </p>
    </>
  );
}

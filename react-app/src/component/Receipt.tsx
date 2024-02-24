import { useInterval } from 'usehooks-ts';

import ReceiptType from '../types/ReceiptType';

type ReceiptProps = {
  receipt: ReceiptType | Record<string, never>;
  isShowReceipt: boolean;
  handleIsShowReceipt: () => void;
  handleRemoveReceipt: () => void;
};

function Receipt({
  receipt,
  isShowReceipt,
  handleIsShowReceipt,
  handleRemoveReceipt,
}: ReceiptProps) {
  useInterval(() => {
    if (isShowReceipt) {
      handleIsShowReceipt();
      handleRemoveReceipt();
    }
  }, 5000);

  return (
    <div>
      {!isShowReceipt ? (
        <p>[영수증 나오는 곳]</p>
      ) : (
        <div>
          <h3>영수증</h3>
          <p>{receipt.id}</p>
          <h2>주문목록</h2>
          <ul>
            {receipt.menu.map((item) => (
              <li key={item.id}>
                {item.name}({item.price}원)
              </li>
            ))}
          </ul>
          <p>
            총가격<span>: {receipt.totalPrice}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Receipt;

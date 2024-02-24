import { useInterval } from 'usehooks-ts';

import moneyformat from '../utils/common';

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            width: '30%',
            border: '1px solid black',
          }}
        >
          <h2>영수증</h2>
          <div>
            <h3>주문번호</h3>
            <p>{receipt.id}</p>
          </div>
          <div>
            <h3>주문목록</h3>
            <ul style={{ listStyle: 'none', padding: '0px' }}>
              {receipt.menu.map((item) => (
                <li key={item.id}>
                  {item.name}({item.price}원)
                </li>
              ))}
            </ul>
            <p>
              총 가격: <span>{moneyformat(receipt.totalPrice)}원</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Receipt;

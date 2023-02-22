import { Dispatch, SetStateAction } from 'react';
import { useInterval } from 'usehooks-ts';
import { Receipt } from '../../types/restaurants';

type ReceiptProps = {
  receipt: Receipt;
  setReceipt: Dispatch<SetStateAction<Receipt>>;
};

export default function OrderReceipt({ receipt, setReceipt }: ReceiptProps) {
  useInterval(() => {
    setReceipt({
      id: 0,
      menus: [],
      totalPrice: 0,
    });
  }, 5_000);

  return (
    <div>
      <div>영수증 나오는 곳</div>

      {receipt.menus.length > 0 && (
        <div>
          <h2>영수증</h2>
          <div>
            <h3>주문번호</h3>
            {receipt?.id}
          </div>
          <div>
            <h3>주문목록</h3>
            <ul>
              {receipt?.menus.map((menu) => (
                <li key={menu.id}>
                  {menu.name}({menu.price.toLocaleString()}원)
                </li>
              ))}
            </ul>
            <div>총 가격: {receipt?.totalPrice.toLocaleString()}원</div>
          </div>
        </div>
      )}

      <div />
    </div>
  );
}

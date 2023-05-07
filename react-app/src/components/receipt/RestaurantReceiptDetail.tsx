import { useInterval } from 'usehooks-ts';
import { Cart } from '../../types/cart';
import { Menu } from '../../types/restaurants';

type ReceiptDetailProps = {
  receipt: Cart;
  setReceipt: (value: Cart) => void;
}

export default function ReceiptDetail({
  receipt, setReceipt,
}: ReceiptDetailProps) {
  useInterval(() => {
    setReceipt({
      menu: [],
      totalPrice: 0,
    });
  }, 5000);
  return (
    <div>
      <h3>영수증</h3>
      <p>
        {`주문번호: ${receipt.id}`}
      </p>
      <ul>
        {receipt.menu.map((receiptMenu: Menu, index: number) => (
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={`${receiptMenu.id}-${index}`}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '10px',
            }}
          >
            <p>
              {`${receiptMenu.name}(${receiptMenu.price.toLocaleString('ko-kr')}원)`}
            </p>
          </li>
        ))}
      </ul>
      <p />
      <p>
        {`총 가격: ${receipt.totalPrice.toLocaleString('ko-kr')}원`}
      </p>
    </div>
  );
}

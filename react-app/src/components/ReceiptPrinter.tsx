import { useInterval } from 'usehooks-ts';

import Menu from '../types/Menu';
import Receipt from '../types/Receipt';

interface ReceiptPrinterProps {
  receipt: Receipt | undefined;
  setReceipt: React.Dispatch<React.SetStateAction<Receipt | undefined>>
}

function ReceiptPrinter({
  receipt, setReceipt,
} : ReceiptPrinterProps) {
  if (!receipt) return <p>[영수증 나오는 곳]</p>;

  useInterval(
    () => {
      setReceipt(undefined);
    },
    receipt ? 5000 : null,
  );

  return (
    <div>

      <div style={{
        border: '1px solid #000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        <h2>영수증</h2>
        <h3>주문번호</h3>
        <p>{receipt.id}</p>
        <h3>주문목록</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {receipt.menu.map((menu: Menu) => (
            <li key={menu.id}>
              {menu.name}
              {' '}
              (
              {menu.price.toLocaleString()}
              원)
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
    </div>
  );
}

export default ReceiptPrinter;

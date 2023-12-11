import { useReadLocalStorage } from 'usehooks-ts';
import Receipt from '../types/Receipt';
import ReceiptItem from './ReceiptItem';

const emptyReceipt = {} as Receipt;

export default function ReceiptPrinter() {
  const receipt = useReadLocalStorage<Receipt>('receipt') || emptyReceipt;
  if (!receipt.id) {
    return <p>[영수증 나오는 곳]</p>;
  }

  return (
    <div style={{ width: '50%', border: '1px solid black', textAlign: 'center' }}>
      <h2>영수증</h2>
      <div>
        <h3>주문번호</h3>
        <p>{receipt.id}</p>
      </div>
      <div>
        <h3>주문목록</h3>
        <ul style={{
          padding: 0,
          listStyle: 'none',
        }}
        >
          {receipt.menu.map((food, index) => {
            const key = `${food.id}-${index}`;
            return (
              <ReceiptItem
                key={key}
                food={food}
              />
            );
          })}
        </ul>
      </div>
      <p>
        총 가격:
        {' '}
        {receipt.totalPrice.toLocaleString()}
        원
      </p>
    </div>
  );
}

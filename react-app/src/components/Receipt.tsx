import Receipt from '../types/Receipt';
import sumPrice from '../utils/sumPrice';
import Foods from './Foods';

type ReceiptProps = {
  receipt: Receipt | null;
};

function Receipt({ receipt }: ReceiptProps) {
  if (!receipt) return '[영수증 나오는 곳]';

  const total = sumPrice(receipt.menu);

  return (
    <div
      style={{
        textAlign: 'center',
        border: '1px solid black',
        padding: '30px',
      }}
    >
      <h2>영수증</h2>
      <h3>주문번호</h3>
      <span>{receipt.id}</span>
      <h3>주문목록</h3>
      <Foods foods={receipt.menu} button={null} />
      <span>{`총 가격: ${total.toLocaleString()}원`}</span>
    </div>
  );
}

export default Receipt;

import Menu from '../types/Menu';
import Receipt from '../types/Receipt';

type ReceiptPrinterProps = {
  receipt: Receipt;
}

export default function ReceiptPrinter({ receipt }: ReceiptPrinterProps) {
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
        <ul>
          {receipt.menu.map((item:Menu, index: number) => {
            const key = `${item.name}-${index}`;
            return (
              <li key={key} style={{ display: 'flex', paddingBlock: '0.5rem' }}>
                <span style={{ margin: '0px auto' }}>
                  {item.name}
                  (
                  {item.price.toLocaleString()}
                  원)
                </span>
              </li>
            );
          })}
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

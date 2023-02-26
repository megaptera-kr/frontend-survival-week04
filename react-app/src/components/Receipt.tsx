import Receipt from '../types/Receipt';

type ReceiptPrinterProps = {
  receipt: Receipt;
}

export default function ReceiptPrinter({ receipt }: ReceiptPrinterProps) {
  if (!receipt.id) {
    return <p>[영수증 나오는 곳]</p>;
  }

  const { id, totalPrice } = receipt;

  return (
    <div style={{
      width: '50%',
      border: '1px solid black',
      textAlign: 'center',
    }}
    >
      <h2>영수증</h2>
      <div>
        <h3>주문번호</h3>
        <p>{id}</p>
      </div>
      <div>
        <h3>주문목록</h3>
        <ul style={{
          padding: 0,
          listStyle: 'none',
        }}
        >
          {receipt.menu.map((menus) => (
            <li key={menus.id}>
              {menus.name}
              (
              {menus.price.toLocaleString()}
              원)
            </li>
          ))}
        </ul>
      </div>
      <p>
        총 가격:
        {' '}
        {totalPrice.toLocaleString()}
        원
      </p>
    </div>
  );
}

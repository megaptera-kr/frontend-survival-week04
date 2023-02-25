import Receipt from '../types/Receipt';

type ReceiptPaperProps = {
  receipt: Receipt;
}

export default function ReceiptPaper({ receipt }:ReceiptPaperProps) {
  return (
    <>
      <p>[영수증 나오는 곳]</p>
      <div style={{
        width: '50%',
        border: '1px solid black',
        textAlign: 'center',
      }}
      >
        <h2>영수증</h2>
        <div>
          <h3>주문번호</h3>
          <p>{receipt.receiptNo}</p>
        </div>
        <div>
          <h3>주문목록</h3>
          <ul style={{ padding: '0px', listStyle: 'none' }}>
            {
              receipt.orders?.map((order) => (
                <li
                  key={order.orderNumber}
                  style={{
                    display: 'flex',
                    paddingBlock: '0.5rem',
                  }}
                >
                  <span style={{ margin: '0px auto' }}>
                    {order.name}
                    (
                    {order.price.toLocaleString()}
                    원)
                  </span>
                </li>
              ))
            }
          </ul>
        </div>
        <p>
          총 가격:
          {' '}
          {receipt.totalPrice.toLocaleString()}
          원
        </p>
      </div>
    </>
  );
}

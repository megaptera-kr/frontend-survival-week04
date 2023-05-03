import Receipt from '../types/Receipt';

interface ReceiptPrinterProps {
    receipt: Receipt | undefined;
}

export default function ReceiptPrinter({ receipt }: ReceiptPrinterProps) {
  return (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      {
        receipt
          ? (
            <div style={{
              width: 500,
              border: 'solid',
              borderWidth: 1,
              borderColor: 'black',
              textAlign: 'center',
              padding: 30,
              boxSizing: 'border-box',
            }}
            >
              <h2 style={{ margin: 0 }}>영수증</h2>
              <h3>주문번호</h3>
              {receipt.id}
              <h3>주문목록</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {receipt.menu.map((menuItem) => (
                  <li
                    key={menuItem.id}
                  >
                    <span>{menuItem.name}</span>
                    <span>
                      (
                      {(menuItem.price).toLocaleString('ko-kr')}
                      원)
                    </span>
                  </li>
                ))}
              </ul>
              <div>
                총 가격:
                {' '}
                {(receipt.totalPrice).toLocaleString('ko-kr')}
                원
              </div>
            </div>
          )
          : (
            <div>[🧾 영수증 나오는 곳]</div>
          )
      }
    </div>
  );
}

import { v4 as uuidv4 } from 'uuid';
import Receipt from '../types/Receipt';

type ReceiptProps = {
  responseReceipt: Receipt;
}

export default function ReceiptMenu({ responseReceipt }: ReceiptProps) {
  return (
    <div>
      {
        responseReceipt.menu
          ? (
            <div className="receipt">
              <h2 className="receipt-header">영수증</h2>
              <div className="receipt-order-number">
                <h3>주문번호</h3>
                <p>{responseReceipt.id}</p>
              </div>
              <div className="receipt-order-list">
                <h3>주문목록</h3>
                <ul className="receipt-items">
                  {responseReceipt.menu.map((menuItem) => (
                    <li className="receipt-item" key={uuidv4()}>
                      <span>
                        {menuItem.name}
                        (
                        {menuItem.price}
                        원)
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="receipt-total">
                총 가격:
                {' '}
                {responseReceipt.totalPrice.toLocaleString()}
                원
              </p>
            </div>
          )
          : <p>Hello</p>
      }
    </div>
  );
}

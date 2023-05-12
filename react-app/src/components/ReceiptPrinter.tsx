import Receipt from '../type/Receipt';
import ReceiptFood from './ReceiptFood';

type ReceiptPrinterProps = {
  orderReceipt : Receipt
}

export default function ReceiptPrinter({ orderReceipt }:ReceiptPrinterProps) {
  console.log(orderReceipt);
  return (
    <div>
      <h2>영수증</h2>
      <h3>주문번호</h3>
      <h3>{orderReceipt.id}</h3>
      <h3>주문목록</h3>
      <div>
        {
          (orderReceipt.menu).map((food) => (
            <ReceiptFood key={food.id} food={food} />
          ))
        }
      </div>

      <div>
        {'총 가격: '}
        {orderReceipt.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        원
      </div>
    </div>
  );
}

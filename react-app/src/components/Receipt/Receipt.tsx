import { MenuInterface } from '../../Interfaces/Restaurant.interface';

interface ReceiptProps {
  receipt: ReceiptResult
}

interface ReceiptResult {
  id: string
  menu: MenuInterface[]
  totalPrice: number
}

function Receipt({ receipt }: ReceiptProps) {
  return (
    <>
      <p>영수증 나오는 곳</p>
      <h3>
        주문번호 :
        {receipt?.id}
      </h3>
      <ul>
        {receipt?.menu?.map(item => <li>{item.name} {item.price}원</li>)}
      </ul>
      <p>총 가격: {receipt?.totalPrice.toLocaleString()}원</p>
    </>
  );
}

export default Receipt;

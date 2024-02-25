import Receipt from '../../../types/Receipt';
import Menus from '../../menu/components/Menus';

import getTotalPrice from '../../cart/utils/totalPrice';

type ReceiptItemProrps = {
  receipt: Receipt
}

export default function ReceiptItem({ receipt }: ReceiptItemProrps) {
  return (
    <div style={{
      width: '50%',
      border: '1px solid black',
      textAlign: 'center',
    }}
    >
      <h1>영수증</h1>
      <h2>주문번호</h2>
      <p>{receipt.id}</p>
      <h2>주문목록</h2>
      <Menus menus={receipt.menu} type="receipt" />
      <h4>
        총 가격 :
        {getTotalPrice(receipt.menu)}
        원
      </h4>
    </div>
  );
}

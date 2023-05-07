import { Cart } from '../../types/cart';
import ReceiptDetail from './RestaurantReceiptDetail';

type RestaurantReceiptProps = {
  receipt: Cart;
  setReceipt: (value: Cart) => void;
}

export default function RestaurantReceipt({
  receipt, setReceipt,
}: RestaurantReceiptProps) {
  return (
    <div>
      <h1>영수증 나오는 곳</h1>
      {receipt?.menu.length > 0
        && (
          <ReceiptDetail
            receipt={receipt}
            setReceipt={setReceipt}
          />
        ) }
    </div>
  );
}

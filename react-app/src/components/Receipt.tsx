import { useEffect, useState } from 'react';
import { MenuItem } from '../type/menu';

type ReceiptProps = {
    receipt:MenuItem[]

}

export default function Receipt({ receipt }: ReceiptProps) {
  const [lastReceipt, setLastReceipt] = useState<MenuItem[]>([]);
  const [count, setCount] = useState<boolean>(false);
  useEffect(() => {
    setLastReceipt(JSON.parse(localStorage.getItem('receipt')));
    setTimeout(() => {
      setLastReceipt([]);
      setCount(true);
    }, 7000);
  }, [receipt]);
  return (
    <div>
      {
        lastReceipt ? (lastReceipt.map((receipt) => (
          <div key={receipt.id}>
            <div>{receipt.name}</div>
            <div>
              {receipt.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              원
            </div>
          </div>
        ))) : (null)
      }
      {
        count ? (<div>[영수증 나오는 곳]</div>) : (null)
      }
    </div>
  );
}

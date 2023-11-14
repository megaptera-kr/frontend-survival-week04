import { useLocalStorage } from 'usehooks-ts';
import useCreateReceipt from '../hooks/useCreateReceipt';
import Button from './Button';

import type { Menu, Receipts } from '../types/types';

type OrderTableType = {
  setReceiptList: (receipt:Receipts) => void;
}

export default function OrderTable({ setReceiptList }:OrderTableType) {
  const [selectedMenu, setSelectedMenu] = useLocalStorage<Menu[]>('order', []);

  const totalPrice = selectedMenu ? selectedMenu.reduce((acc, cur) => acc + cur.price, 0) : 0;

  const createReceipt = useCreateReceipt();

  const handleCancel = (idx: number) => {
    const newArr = selectedMenu.filter((_, index) => index !== idx);
    setSelectedMenu(newArr);
  };

  const handleOrder = async () => {
    if (selectedMenu.length === 0) {
      return;
    }

    const receipt = await createReceipt(selectedMenu);
    setReceiptList(receipt);
    setSelectedMenu([]);
  };
  return (
    <div className="OrderTable">
      <h2>점심 바구니</h2>
      <ul>
        {
          selectedMenu && (
            selectedMenu.map((el, idx) => (
              <li key={el.id}>
                <span>
                  {`${el.name} (${el.price.toLocaleString()})원`}
                </span>
                <Button title="취소" onClick={() => handleCancel(idx)} />
              </li>
            ))
          )
        }
      </ul>
      <button type="button" onClick={handleOrder}>{`합계: ${totalPrice.toLocaleString()}원 주문`}</button>
    </div>
  );
}

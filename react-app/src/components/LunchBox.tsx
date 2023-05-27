import { useLocalStorage } from 'usehooks-ts';

import LunchItem from './LunchItem';

import useCreateOrder from '../hooks/useCreateOrder';

import MenuType from '../types/MenuType';
import ReceiptType from '../types/ReceiptType';
import totalPriceCalculate from '../utils/totalPriceCalculate';

type LunchBoxProps = {
  setReceipt: (receipt: ReceiptType) => void
}

export default function LunchBox({ setReceipt }: LunchBoxProps) {
  const [lunchFood, setLunchFood] = useLocalStorage<MenuType[]>('cart', []);

  const handelCancel = (lunchId: number) => {
    const deleteMenu = lunchFood.filter((_, index) => index !== lunchId);
    setLunchFood(deleteMenu);
  };

  const { createOrder } = useCreateOrder();

  const lunchPrice = totalPriceCalculate(lunchFood);

  const orderBtn = async () => {
    if (!lunchFood.length) {
      return;
    }
    const orderMenu = await createOrder(lunchFood);
    setReceipt(orderMenu);

    setLunchFood([]);
  };

  return (
    <div>
      <h2>점심 바구니</h2>
      {lunchFood.map((lunch, i) => (
        <LunchItem
          lunch={lunch}
          index={i}
          key={lunch.id}
          handelCancel={handelCancel}
        />
      ))}
      <button type="button" onClick={orderBtn}>
        총 가격
        {lunchPrice}
        {' '}
        주문
      </button>
    </div>
  );
}

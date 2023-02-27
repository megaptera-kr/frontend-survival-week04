import { useLocalStorage } from 'usehooks-ts';

import useCreateOrder from '../hooks/useCreateOrder';

import { Menu } from '../types/Restaurant';
import Receipt from '../types/Receipt';

type CartProps = {
  setReceipt: (receipt: Receipt) => void;
}

export default function Cart({ setReceipt }: CartProps) {
  const [selectedFoods, setFoods] = useLocalStorage<Menu[]>('cart', []);

  const { createOrder } = useCreateOrder();

  const totalPrice = selectedFoods.reduce((acc, cur) => acc + cur.price, 0);

  const handleClickCancel = (index: number) => {
    const foods = selectedFoods.filter((_, i) => i !== index);
    setFoods(foods);
  };

  const handleClickOrder = async () => {
    if (!selectedFoods.length) {
      return;
    }

    const receipt = await createOrder(selectedFoods, totalPrice);

    setReceipt(receipt);

    setFoods([]);
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2>
        점심 바구니
      </h2>
      <ul style={{ width: '30%' }}>
        {selectedFoods.map((cart, index) => (
          <li key={cart.id}>
            <span>
              {cart.name}
              (
              {cart.price}
              )
            </span>
            <span>
              <button
                type="button"
                onClick={() => handleClickCancel(index)}
              >
                취소
              </button>
            </span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={handleClickOrder}
      >
        합계:
        {' '}
        {totalPrice.toLocaleString()}
        원 주문
      </button>
    </div>
  );
}

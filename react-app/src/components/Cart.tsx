import { useLocalStorage } from 'usehooks-ts';
import useCreateOrder from '../hooks/useCreateOrder';
import Food from '../types/Food';
import CartItem from './CartItem';
import OrderButton from './OrderButton';

import Receipt from '../types/Receipt';

type CartProps = {
  setReceipt : (value: Receipt) => void
}

export default function Cart({ setReceipt }: CartProps) {
  const [selectedFoods, setFoods] = useLocalStorage<Food[]>('cart', []);

  const handleClickCancel = (index: number) => {
    const food = selectedFoods.filter((_, i) => i !== index);
    setFoods(food);
  };

  const { createOrder } = useCreateOrder();

  const handleClickOrder = async () => {
    if (!selectedFoods.length) {
      return;
    }
    const receipt = await createOrder(selectedFoods);
    setReceipt(receipt);

    setFoods([]);
  };
  return (
    <div>
      <h2>주문 바구니</h2>
      <ul>
        {selectedFoods.map((food, index) => {
          const key = `${food.id}-${index}`;

          return (
            <CartItem
              key={key}
              index={index}
              food={food}
              onClickCancel={handleClickCancel}
            />
          );
        })}
      </ul>
      <OrderButton
        foods={selectedFoods}
        onClick={handleClickOrder}
      />
    </div>

  );
}

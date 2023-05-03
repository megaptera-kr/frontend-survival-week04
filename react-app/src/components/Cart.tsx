import { useLocalStorage } from 'usehooks-ts';
import useCreateOrder from '../hooks/useCreateOrder';

import OrderBtn from './OrderBtn';

import Food from '../types/Food';
import Receipt from '../types/Receipt';
import CartItem from './CartItem';

type CartProps = {
  setReceipt: (receipt: Receipt) => void;
}

export default function Cart({ setReceipt }: CartProps) {
  const [selectedFoods, setSelectedFoods] = useLocalStorage<Food[]>('cart', []);

  const { createOrder } = useCreateOrder();

  const handleClickCancel = (index: number) => {
    const foods = selectedFoods.filter((_, i) => i !== index);
    setSelectedFoods(foods);
  };

  const handleClickOrder = async () => {
    if (!selectedFoods.length) {
      return;
    }
    const receipt = await createOrder(selectedFoods);
    setReceipt(receipt);

    setSelectedFoods([]);
  };

  return (
    <>
      <h2>점심 바구니</h2>
      <div>
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
      </div>

      {/* 주문버튼 */}
      <OrderBtn
        foods={selectedFoods}
        onClick={handleClickOrder}
      />
    </>
  );
}

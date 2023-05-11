import { useLocalStorage } from 'usehooks-ts';
import CartItem from './CartItem';
import OrderButton from './OrderButton';

import useCreateOrder from '../hooks/useCreateOrder';

import Food from '../types/Food';
import Receipt from '../types/Receipt';

type CartProps = {
  setReceipt: (receipt: Receipt) => void;
}

export default function Cart({ setReceipt }: CartProps) {
  const [selectedFoods, setFoods] = useLocalStorage<Food[]>('cart', []);

  const handleClickCancle = (index: number) => {
    const foods = selectedFoods.filter((v, i) => i !== index);
    setFoods(foods);
  };

  const handleClickOrder = async () => {
    if (!selectedFoods.length) {
      return;
    }

    const receipt = await useCreateOrder(selectedFoods);
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
              food={food}
              index={index}
              onClickCancle={handleClickCancle}
            />
          );
        })}
      </ul>
      <OrderButton
        foods={selectedFoods}
        onClickOrder={handleClickOrder}
      />
    </div>
  );
}

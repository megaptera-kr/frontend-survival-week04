import { useLocalStorage } from 'usehooks-ts';

import useFetchOrders from '../hooks/useFetchOrders';

import Food from './RestaurantsTable/Food';
import { TReceipt } from '../types/receipt';
import { TRestaurantMenu } from '../types/restaurant';

type CartProps = {
  setReceipt: (receipt: TReceipt) => void;
}

export default function Cart({ setReceipt }: CartProps) {
  const [selectedFoods, setFoods] = useLocalStorage<TRestaurantMenu[]>('cart', []);

  const { fetchOrder } = useFetchOrders();

  const totalPrice = selectedFoods.reduce((acc, cur) => acc + cur.price, 0);

  const handleClickCancel = (index: number) => {
    const foods = selectedFoods.filter((_, i) => i !== index);
    setFoods(foods);
  };

  const handleClickOrder = async () => {
    if (!selectedFoods.length) {
      return;
    }

    const receipt = await fetchOrder(selectedFoods, totalPrice);

    setReceipt(receipt);

    setFoods([]);
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2>
        점심 바구니
      </h2>
      <ul style={{ width: '20%' }}>
        {selectedFoods.map((food, index) => {
          const { id } = food;

          const key = `${id}-${index}`;

          return (
            <Food
              key={key}
              food={food}
            >
              <button
                style={{ marginLeft: '.5rem' }}
                type="button"
                onClick={() => handleClickCancel(index)}
              >
                취소
              </button>
            </Food>
          );
        })}
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

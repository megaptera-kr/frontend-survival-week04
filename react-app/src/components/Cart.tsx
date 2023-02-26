import { useLocalStorage } from 'usehooks-ts';
import { TRestaurantMenu } from '../types/restaurant';
import Food from './RestaurantsTable/Food';
import useFetchOrders from '../hooks/useFetchOrders';
import { TReceipt } from '../types/receipt';

type CartProps = {
  onClickPrinter: (receipt: TReceipt) => void
}

function Cart({ onClickPrinter }: CartProps) {
  const [selectedFood, setSelectedFood] = useLocalStorage<TRestaurantMenu[]>('cart', []);

  const { fetchOrder } = useFetchOrders();

  const onClickCancelOrders = (idx: number) => {
    const cancelledFood = selectedFood.filter((_, i) => i !== idx);
    setSelectedFood(cancelledFood);
  };

  const totalPrice = selectedFood.reduce((acc, cur) => acc + cur.price, 0);
  const onClickToCart = async () => {
    if (!selectedFood.length) return;

    const receipt = selectedFood ? await fetchOrder(selectedFood, totalPrice) : null;
    onClickPrinter(receipt);
    setSelectedFood([]);
  };

  return (
    <div className="cart">
      <h2>점심 바구니</h2>
      <ul>
        {selectedFood.map((food, idx) => {
          const key = `${food.id}-${idx}`;

          return (
            <Food
              key={key}
              food={food}
            >
              <button
                type="button"
                className="cancel-button"
                onClick={() => onClickCancelOrders(idx)}
              >
                취소
              </button>
            </Food>
          );
        })}
      </ul>
      <button type="button" className="total-button" onClick={onClickToCart}>
        합계:
        {' '}
        {totalPrice.toLocaleString()}
        원 주문
      </button>
    </div>
  );
}

export default Cart;

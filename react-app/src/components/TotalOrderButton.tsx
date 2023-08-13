import priceToLocal from '../../utils/priceToLocal';
import useMenuBasket from '../hooks/useMenuBasket';

export default function TotalOrderButton() {
  const { basket } = useMenuBasket();

  const totalAmount = basket.reduce((acc, cur) => acc + cur.price, 0);
  const buttonText = `합계 ${priceToLocal(totalAmount)}원 주문`;
  return (
    <button type="button">
      {buttonText}
    </button>
  );
}

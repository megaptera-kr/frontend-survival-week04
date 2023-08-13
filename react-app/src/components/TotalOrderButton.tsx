import priceToLocal from '../../utils/priceToLocal';
import useMenuBasket from '../hooks/useMenuBasket';
import usePostOrder from '../hooks/usePostOrder';
import useReceipt from '../hooks/useReceipt';

export default function TotalOrderButton() {
  const { totalPrice, clearBasket } = useMenuBasket();
  const { postOrder } = usePostOrder();
  const { addReceipt } = useReceipt();

  const buttonText = `합계: ${priceToLocal(totalPrice)}원 주문`;

  const handleClickOrder = async () => {
    const res = await postOrder();

    addReceipt(res);
    clearBasket();
  };

  return (
    <button type="button" onClick={() => handleClickOrder()}>
      {buttonText}
    </button>
  );
}

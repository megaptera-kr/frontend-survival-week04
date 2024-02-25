import useCartList from '../hooks/useCartList';
import getTotalPrice from '../utils/totalPrice';

export default function OrderButton() {
  const { cart, handleOrderInCart } = useCartList();
  return (
    <button type="button" onClick={() => handleOrderInCart()}>
      합계 :
      {' '}
      {getTotalPrice(cart)}
      원 주문
    </button>
  );
}

import { useLocalStorage } from 'usehooks-ts';

import Menu from '../../../types/Menu';

import useReceipt from '../../receipt/hooks/useReceipt';
import apiPostCreateOrder from '../../../api/apiPostCreatorder';

const CART_STORAGE_KEY = 'cart-key';

export default function useCartList() {
  const [cart, setCart] = useLocalStorage<Menu[]>(CART_STORAGE_KEY, []);

  const { receipt, setReceipt } = useReceipt();

  const handleOrderInCart = async () => {
    if (cart.length === 0) {
      alert('주문할 메뉴가 없습니다.');
      return;
    }

    const receiptRes = await apiPostCreateOrder(cart);

    if (receiptRes) {
      setReceipt(receiptRes);

      setTimeout(() => {
        setCart([]);
        setReceipt({ id: '', menu: [], totalPrice: 0 });
      }, 5000);
    }
  };

  return { cart, setCart, handleOrderInCart };
}

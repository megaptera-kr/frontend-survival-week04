import { useLocalStorage } from 'usehooks-ts';
import { Food } from '../types/Restaurant';
import CartItem from './CartItem';
import OrderButton from './OrderButton';
import useCreateOrder from '../hooks/useCreateOrder';
import { ReceiptType } from '../types/receipt';

interface ShoppingBasketProps {
  setReceipt: (menus: ReceiptType) => void;
}

export default function ShoppingBasket({ setReceipt }: ShoppingBasketProps) {
  const [isCartItems, setCartItems] = useLocalStorage<Food[]>('cartItem', []);

  const createOrder = useCreateOrder();
  const handleCancel = (index: number) => {
    setCartItems(isCartItems.filter((_, i) => i !== index));
  };

  const handleOrder = async () => {
    if (!isCartItems.length) {
      return;
    }
    const receipt = await createOrder(isCartItems);

    setReceipt(receipt);
    setCartItems([]);
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2>점심 바구니</h2>
      <ul style={{ width: '20%' }}>
        {isCartItems.map((menu, index) => (
          <CartItem key={menu.id} menu={menu}>
            <button
              type="button"
              style={{ marginLeft: '0.5rem' }}
              onClick={() => handleCancel(index)}
            >
              취소
            </button>
          </CartItem>
        ))}
      </ul>
      <OrderButton foods={isCartItems} onClick={handleOrder} />
    </div>
  );
}

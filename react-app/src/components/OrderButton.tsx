import { useLocalStorage } from 'usehooks-ts';
import useCreateReceipt from '../hooks/useCreateReceipt';
import Food from '../type/Food';
import Receipt from '../type/Receipt';

type OrderButtonProps = {
  totalPrice : number
}

const emptyReceipt = {} as Receipt;

export default function OrderButton({ totalPrice }:OrderButtonProps) {
  const [menuCart, setMenuCart] = useLocalStorage<Food[]>('cart', []);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [orderReceipt, setOrderReceipt] = useLocalStorage<Receipt>('receipt', emptyReceipt);
  async function handleReceipt() {
    const receipt = await useCreateReceipt({ menuCart, totalPrice });
    setOrderReceipt(receipt);
    setMenuCart([]);
    setTimeout(() => {
      setOrderReceipt(emptyReceipt);
    }, 7000);
  }
  return (
    <button type="button" onClick={handleReceipt}>
      {'합계: '}
      {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      원 주문
    </button>
  );
}

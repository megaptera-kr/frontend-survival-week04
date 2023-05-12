import { useLocalStorage } from 'usehooks-ts';
import Food from '../type/Food';

type CartItemProps = {
  food : Food,
  index : number
}

export default function CartItem({ food, index }: CartItemProps) {
  const [menuCart, setMenuCart] = useLocalStorage<Food[]>('cart', []);
  function handleCancel() {
    const canceledCart = menuCart.filter((menu, i) => ((i !== index)));
    setMenuCart(canceledCart);
  }
  return (
    <div>
      <span>
        {food.name}
        (
        {food.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        원)
        <button type="button" onClick={handleCancel}> 취소 </button>
      </span>
    </div>
  );
}

import { Menu } from '../types';
import SelectMenuItem from './SelectMenuItem';

type Props = {
  cart: Menu[];
  setCart: (value: React.SetStateAction<Menu[]>) => void;
}
export default function Cart({ cart, setCart }:Props) {
  return (
    <div
      className="min-h-[200px] max-h-[400px] border-2
      w-full overflow-y-scroll p-4 flex flex-col items-center"
    >
      {cart.length <= 0 ? (
        <div />
      ) : (
        cart.map((menu, index) => (
          <SelectMenuItem
            key={menu.id}
            cart={menu}
            index={index}
            setCart={setCart}
          />
        ))
      )}
    </div>
  );
}

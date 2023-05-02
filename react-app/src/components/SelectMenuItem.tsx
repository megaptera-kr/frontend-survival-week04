import { Menu } from '../types';
import MenuSelectButton from './MenuSelectButton';

type Props = {
  index:number;
  cart: Menu;
  setCart: (value: React.SetStateAction<Menu[]>) => void;
}

export default function SelectMenuItem({ index, cart, setCart }:Props) {
  return (
    <div
      className="w-1/2 flex justify-between items-center my-2 px-4"
    >
      <div>
        {cart.name}
        (
        {cart.price.toLocaleString()}
        원)
      </div>
      <MenuSelectButton
        name={`#${cart.name}`}
        title="취소"
        setCart={() => setCart((prev) => (
          prev.filter((_, prevIndex) => prevIndex !== index)))}
      />
    </div>
  );
}

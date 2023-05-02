import { useLocalStorage } from 'usehooks-ts';
import { Menu } from '../types';
import MenuSelectButton from './MenuSelectButton';

type Props = {
  menu: Menu;
}

export default function MenuItem({ menu }:Props) {
  const [, setCart] = useLocalStorage<Menu[]>('cart', []);
  return (
    <li className="w-full flex justify-between items-center my-2 px-4">
      {menu.name}
      (
      {menu.price.toLocaleString()}
      원)
      <MenuSelectButton
        name={`#${menu.name}`}
        title="선택"
        setCart={() => setCart((prev) => ([...prev, menu]))}
      />
    </li>
  );
}

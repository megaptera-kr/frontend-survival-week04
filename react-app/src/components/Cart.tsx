import { useLocalStorage } from 'usehooks-ts';
import { Menu } from '../types';

export default function Cart() {
  const [selectedMenus, selectMenu] = useLocalStorage<Menu[]>('cart', []);

  const handleCancelMenu = (index: number) => {
    selectMenu(selectedMenus.filter((_, i) => i !== index));
  };

  return (
    <>
      <h2>점심 바구니</h2>
      <ul>
        {selectedMenus.map((menu, idx) => {
          const key = `${menu.id}-${idx}`;
          return (
            <li key={key}>
              <p>
                {menu.name}
                {`(${menu.price.toLocaleString()}원)`}
              </p>
              <button
                name={`#${menu.name}`}
                type="button"
                onClick={() => handleCancelMenu(idx)}
              >
                취소
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

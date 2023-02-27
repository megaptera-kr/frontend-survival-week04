import { useLocalStorage } from 'usehooks-ts';
import displayMenu from './functions/displayMenu';
import menuType from './types/menuType';

export default function MenuList({ menu }: {menu: menuType[]}) {
  const [cart, setCart] = useLocalStorage<menuType[]>('cart', []);

  return (
    <>
      {
        menu.map((el) => (
          <li key={el.id}>
            {displayMenu(el.name, el.price)}
            <button
              name={`#${el.name}`}
              type="button"
              onClick={() => {
                const newCart = [...cart, el];
                setCart(newCart);
              }}
            >
              선택
            </button>
          </li>
        ))
      }
    </>
  );
}

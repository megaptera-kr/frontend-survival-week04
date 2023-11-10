import { useLocalStorage } from 'usehooks-ts';
import Button from './Button';
import type { Menu, Restaurants } from '../types/types';

export default function MenuTableRow({ product }: { product: Restaurants }) {
  const [selectedMenu, setSelectedMenu] = useLocalStorage<Menu[]>('order', []);

  const handleSelect = (select: Menu) => {
    setSelectedMenu([
      ...selectedMenu,
      select,
    ]);
  };

  return (
    <tr className="MenuTableRow">
      <td>
        {product.name}
      </td>
      <td>
        {product.category}
      </td>
      <td>
        <ul>
          {
            product.menu.map((menu:Menu) => (
              <li key={menu.id}>
                <span>
                  {menu.name}
                  (
                  {menu.price.toLocaleString()}
                  원)
                </span>
                <Button title="선택" onClick={() => handleSelect(menu)} />
              </li>
            ))
          }
        </ul>
      </td>
    </tr>
  );
}

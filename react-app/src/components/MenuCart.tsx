import { MenuCartType } from '../types/restaurants';
import Menu from './Menu';

type PropTypes = {
  handleOrder: () => void;
  handleRemove: (index: number) => void;
} & MenuCartType;

export default function MenuCart({
  menu,
  totalPrice,
  handleOrder,
  handleRemove,
}: PropTypes) {
  const price = totalPrice.toLocaleString();
  return (
    <div>
      <h2>점심 바구니</h2>
      <div>
        {menu.map((_menu, i) => (
          <Menu menu={_menu} key={`${_menu.id}_${i.toString()}`}>
            <button type="button" onClick={() => handleRemove(i)}>
              삭제
            </button>
          </Menu>
        ))}
      </div>
      <button type="button" onClick={() => handleOrder()}>
        합계:
        {' '}
        {price}
        원 주문
      </button>
    </div>
  );
}

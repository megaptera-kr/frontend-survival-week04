import Menu from '../types/Menu';

type CartItemProps = {
    menu: Menu
    index: number;
    onClickCancel: (index: number) => void;
}

export default function CartItem({
  menu,
  index,
  onClickCancel,
}: CartItemProps) {
  return (
    <li style={{ display: 'flex', paddingBlock: '0.5rem' }}>
      <span>
        {' '}
        {menu.name}
        (
        {menu.price}
        원)
      </span>
      <button
        type="button"
        style={{ marginLeft: '0.5rem' }}
        onClick={() => onClickCancel(index)}
      >
        취소
      </button>
    </li>
  );
}

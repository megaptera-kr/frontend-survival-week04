import { useLocalStorage } from 'usehooks-ts';

import Menu from '../types/Menu';
import Orders from '../types/Orders';

type FoodsProps = {
  menu: Menu;
}

export default function Foods({ menu }:FoodsProps) {
  const [orderList, setOrderList] = useLocalStorage<Orders[]>('orderList', []);

  const selectMenu = () => {
    const order = {
      orderNumber: `${`${menu.name}-${orderList.length}`}`,
      ...menu,
    };

    setOrderList([...orderList, order]);
  };

  return (
    <li style={{ display: 'flex', paddingBlock: '0.5rem' }}>
      <span style={{ margin: '0px auto' }}>
        {menu?.name}
        (
        {menu?.price.toLocaleString()}
        원)
      </span>
      <button
        name={`#${menu?.name}`}
        type="button"
        style={{ marginLeft: '0.5rem' }}
        onClick={selectMenu}
      >
        선택
      </button>
    </li>
  );
}

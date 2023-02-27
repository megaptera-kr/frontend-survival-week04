import { useLocalStorage } from 'usehooks-ts';

import usePostOrder from '../hooks/usePostOrder';

import MenuItem from './MenuItem';

import Receipt from '../types/Receipt';
import Menu from '../types/Menu';

type CartProps = {
    setReceipt: (receipt: Receipt) => void;
}

export default function Cart({ setReceipt }: CartProps) {
  const [selectedMenus, setMenus] = useLocalStorage<Menu[]>('cart', []);

  const { postOrder } = usePostOrder();

  const totalPrice = selectedMenus.reduce((acc, cur) => acc + cur.price, 0);

  const handleClickOrder = async () => {
    if (!selectedMenus.length) {
      return;
    }

    const receipt = await postOrder(selectedMenus, totalPrice);

    setReceipt(receipt);

    setMenus([]);
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2>
        점심 바구니
      </h2>
      <ul style={{ width: '20%' }}>
        {selectedMenus.map((data, index) => {
          const key = `${data.id}-${index}`;

          return (
            <MenuItem
              key={key}
              data={data}
              cancelIndex={index}
            />
          );
        })}
      </ul>
      <button
        type="button"
        onClick={handleClickOrder}
      >
        {`합계: ${totalPrice.toLocaleString()}원 주문`}
      </button>
    </div>
  );
}

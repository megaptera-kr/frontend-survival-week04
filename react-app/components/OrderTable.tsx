import { useLocalStorage } from 'usehooks-ts';
import CreateOrder from '../api/CreateOrder';
import Menu from '../types/Menu';
import Receipt from '../types/Receipt';

type OrderListProps = {
  setReceipt: (receipt: Receipt) => void;
}

export default function OrderList({ setReceipt }: OrderListProps) {
  const [orderedMenu, orderMenu] = useLocalStorage('orderTable', []);

  const { postData } = CreateOrder();

  const handleClickCancel = (index: number) => {
    const removeMenu = orderedMenu.splice(index, 1);
    orderMenu(orderedMenu);
    // const removedMenu = orderedMenu.filter((_, i) => i !== index);
    // orderMenu(removedMenu);
  };

  const totalPrice = orderedMenu
    .reduce((acc: number, cur: Menu) => acc + cur.price, 0);

  const handleClickOrder = async () => {
    if (!orderedMenu.length) {
      return;
    }
    const receipt = await postData(orderedMenu, totalPrice);
    setReceipt(receipt);
    orderMenu([]);
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2>점심 바구니</h2>
      <ul style={{ width: '20%' }}>
        {orderedMenu.map((menu: Menu, index) => {
          const key = `${menu.id}-${index}`;
          return (
            <li key={key} style={{ display: 'flex', paddingBlock: '0.5rem' }}>
              <span style={{ margin: '0px auto' }}>
                {menu.name}
                (
                {menu.price.toLocaleString()}
                원)
              </span>
              <button
                type="button"
                style={{ marginLeft: '0.5rem' }}
                onClick={() => handleClickCancel(index)}
              >
                취소
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={handleClickOrder}
      >
        합계:
        {' '}
        {totalPrice.toLocaleString() || 0}
        원 주문

      </button>
    </div>
  );
}

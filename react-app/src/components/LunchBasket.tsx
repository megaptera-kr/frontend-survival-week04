import Menu from '../types/Menu';
import Receipt from '../types/Receipt';
import OrderButton from './OrderButton';
import SelectedMenu from './SelectedMenu';

type LunchBasketProps = {
  selectedMenus: Menu[];
  setSelectedMenus: (menus: Menu[]) => void;
  setReceipt: (receipt: Receipt) => void;
 }

export default function LunchBasket({
  selectedMenus, setSelectedMenus, setReceipt,
}: LunchBasketProps) {
  return (
    <div>
      <h2>
        점심 바구니
      </h2>
      {selectedMenus.length
        ? (
          <ul>
            {selectedMenus.map((menu, index) => (
              <SelectedMenu
                key={`${menu}-${Date.toString()}`}
                menu={menu}
                index={index}
                selectedMenus={selectedMenus}
                setSelectedMenus={setSelectedMenus}
              />
            ))}
          </ul>
        )
        : null}
      <OrderButton
        selectedMenus={selectedMenus}
        setSelectedMenus={setSelectedMenus}
        setReceipt={setReceipt}
      />
    </div>
  );
}

import { useInterval, useLocalStorage } from 'usehooks-ts';
import useSelectMenu from './hook/useSelectMenu';
import SelectMenuList from './components/SelectMenuList';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';

import useFetchRestaurant from './hook/useFetchRestaurant';
import ReceiptList from './components/ReceiptList';

export default function App() {
  const {
    selectMenu, setSelectMenu, handleSelectMenu, handleRemoveSelectMenu,
  } = useSelectMenu();
  const [receipt, setReceipt] = useLocalStorage('receipt', []);
  const restaurants = useFetchRestaurant();

  useInterval(() => {
    if (receipt.id) {
      setReceipt({});
    }
  }, receipt.id ? 5000 : null);

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <SelectMenuList
        selectMenu={selectMenu}
        setSelectMenu={setSelectMenu}
        restaurants={restaurants}
        handleRemoveSelectMenu={handleRemoveSelectMenu}
        setReceipt={setReceipt}
      />
      <FilterableRestaurantTable
        restaurants={restaurants}
        handleSelectMenu={handleSelectMenu}
      />
      <ReceiptList receipt={receipt} />
    </div>
  );
}

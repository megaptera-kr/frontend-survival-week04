import useRestaurantOrder from '../hook/useRestaurantOrder';
import { Restaurant } from '../types/restaurant';
import RestaurantMenuList from './RestaurantMenuList';

type SelectMenuListProps = {
    selectMenu: string[];
    setSelectMenu: (value:string[]) => void;
    restaurants: Restaurant[];
    handleRemoveSelectMenu: (index:number) => void;
    setReceipt: (value:string[]) => void;
}

export default function SelectMenuList({
  selectMenu,
  setSelectMenu,
  restaurants,
  handleRemoveSelectMenu,
  setReceipt,
}:SelectMenuListProps) {
  const totalPrice = selectMenu.reduce((acc, cur) => acc + cur.price, 0);
  const { createOrder } = useRestaurantOrder();

  const handleClickOrder = async () => {
    if (!selectMenu.length) {
      return;
    }

    const receipt = await createOrder(selectMenu);
    setReceipt(receipt);

    setSelectMenu([]);
  };

  return (
    <>
      <h2>점심 바구니</h2>
      {selectMenu.map((menu, index) => (
        restaurants.map((restaurant) => (
          restaurant?.menu.map((item) => (
            menu.id === item.id && (
              <RestaurantMenuList
                index={index}
                key={item.id}
                restaurantMenu={item}
                mode="remove"
                handleRemoveSelectMenu={handleRemoveSelectMenu}
              />
            )))
        ))
      ))}
      <div>
        <button type="button" onClick={handleClickOrder}>
          합계:
          {' '}
          {totalPrice.toLocaleString()}
          원 주문
        </button>
      </div>
    </>
  );
}

import { v4 as uuidv4 } from 'uuid';

import Order from './Order';

import RestaurantMenu from '../types/RestaurantMenuType';

type OrderBoxProps = {
  cartDataLocalStorage: RestaurantMenu[];
};

function OrderBox({ cartDataLocalStorage }: OrderBoxProps) {
  return (
    <div>
      <h2>점심바구니</h2>
      {cartDataLocalStorage.map((restaurantMenu: RestaurantMenu) => (
        <Order
          key={`${uuidv4()}-${restaurantMenu.id}`}
          restaurantMenu={restaurantMenu}
        />
      ))}
    </div>
  );
}

export default OrderBox;

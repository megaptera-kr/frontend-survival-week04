import RestaurantMenu from './RestaurantMenuType';

type OrderType = {
  id: string;
  menu: RestaurantMenu[];
  totalPrice: number;
};

export default OrderType;

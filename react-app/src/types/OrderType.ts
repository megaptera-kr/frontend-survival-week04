import RestaurantMenuType from './RestaurantMenuType';

type OrderType = {
  totalPrice: number;
  menu: RestaurantMenuType[];
};

export default OrderType;

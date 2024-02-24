import RestaurantMenuType from './RestaurantMenuType';

type ReceiptType = {
  id: string;
  totalPrice: number;
  menu: RestaurantMenuType[];
};

export default ReceiptType;

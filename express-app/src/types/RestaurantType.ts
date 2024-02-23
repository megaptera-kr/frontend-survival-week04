import RestaurantMenu from './RestaurantMenuType';

type Restaurant = {
  id: string;
  name: string;
  category: string;
  menu: RestaurantMenu[];
};

export default Restaurant;

import RestaurantMenuType from './RestaurantMenuType';

type RestaurantType = {
  id: string;
  name: string;
  category: string;
  menu: RestaurantMenuType[];
};

export default RestaurantType;

import menuType from './menuType';

type restaurantType = {
  id: string,
  category: string,
  name: string,
  menu: menuType[],
}

export default restaurantType;

import { RestaurantCategoryWithAll } from './restaurants';

export type RestaurantFilter = {
  name: string;
  category: RestaurantCategoryWithAll
}

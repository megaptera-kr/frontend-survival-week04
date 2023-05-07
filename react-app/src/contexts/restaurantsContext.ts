import { createContext } from 'react';
import { RestaurantContextValue } from '../types/restaurants';

const RestaurantContext = createContext<RestaurantContextValue>({
  restaurants: [],
});

export default RestaurantContext;

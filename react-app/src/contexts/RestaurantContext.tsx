import {
  createContext, ReactNode, useEffect, useMemo, useState,
} from 'react';
import { getRestaurant } from '../apis';
import { Category, Restaurant } from '../types/restaurant';

export type SearchParams = {
  name: string,
  category: Category,
}

type RestaurantContextValue = {
  restaurants: Restaurant[]
  searchParams: SearchParams
  searchRestaurants?: (searchParams: SearchParams) => void
}

type RestaurantProviderProps = {
  children: ReactNode
}

export const RestaurantContext = createContext<RestaurantContextValue>({
  restaurants: [],
  searchParams: { name: '', category: '전체' },
});

export function RestaurantProvider({ children }: RestaurantProviderProps) {
  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [searchParams, setSearchParams] = useState<SearchParams>({ name: '', category: '전체' });

  const searchRestaurants = (newSearchParams: SearchParams) => {
    const { name, category } = newSearchParams;

    if (!name && category === '전체') {
      setRestaurants(allRestaurants);
    }

    setRestaurants(allRestaurants.filter((restaurant) => {
      const isNameMatched = !name.trim() || restaurant.name.includes(name);
      const isCategoryMatched = category === '전체' || restaurant.category === category;

      return isNameMatched && isCategoryMatched;
    }));
    setSearchParams(newSearchParams);
  };

  const contextValue = useMemo(() => ({
    restaurants,
    searchParams,
    searchRestaurants,
  }), [restaurants]);

  const fetchRestaurant = async () => {
    const res = await getRestaurant();
    setRestaurants(res);
    setAllRestaurants(res);
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  return (
    <RestaurantContext.Provider value={contextValue}>
      {children}
    </RestaurantContext.Provider>
  );
}

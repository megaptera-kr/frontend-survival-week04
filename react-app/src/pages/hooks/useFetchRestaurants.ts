import { useFetch } from 'usehooks-ts';

export const BASE_URL = 'http://localhost:3000';

export interface RestaurantsData {
    restaurants: {
      id: string
      category: string
      name: string,
      menu: { id: string, name: string, price: number }[]
    }[]
  }

/** 식당 목록 조회 */
export const useFetchRestaurants = () => useFetch<RestaurantsData>(`${BASE_URL}/restaurants`);

import { Restaurant } from '../types/restaurant';
import http from './core';
import { GetRestaurantResponse, PostOrderRequest, PostOrderResponse } from './dto';

const API_URI = 'http://localhost:3000';

export const getRestaurant = async (): Promise<Restaurant[]> => {
  try {
    const { restaurants } = await http.get<null, GetRestaurantResponse>(`${API_URI}/restaurants`);
    return restaurants;
  } catch (e) {
    return {} as Restaurant[];
  }
};

export const postOrders = async (data: PostOrderRequest): Promise<PostOrderResponse> => {
  try {
    const res = await http.post<PostOrderRequest, PostOrderResponse>(`${API_URI}/orders`, data);
    return res;
  } catch (e) {
    return {} as PostOrderResponse;
  }
};

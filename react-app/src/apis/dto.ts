import {
  CartItem, Receipt, Restaurants,
} from '../types/restaurant';

export type GetRestaurantResponse = Restaurants

export type PostOrderRequest = CartItem

export type PostOrderResponse = Receipt

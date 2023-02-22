/* eslint-disable no-use-before-define */

export type RestaurantResponseDto = {
  restaurants: Restaurant[];
};

export type Restaurant = {
  id: string;
  category: string;
  name: string;
  menus: Menu[];
};

export type Menu = {
  id: string;
  name: string;
  price: number;
};

export type LunchCarts = Menu;

export type Receipt = {
  id: number;
  menus: Restaurant['menus'];
  totalPrice: number;
};

import { MenuItem } from './MenuItem';

export type Restaurant = {
    id: string;
    name: string;
    category: string;
    menu: MenuItem[];
  };

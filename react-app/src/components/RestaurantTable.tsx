import React from 'react';
import { Restaurant } from '../types/restaurant';
import RestaurantMenuList from './RestaurantMenuList';

type RestaurantTableProps = {
    restaurants: Restaurant[];
    handleSelectMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function RestaurantTable({ restaurants, handleSelectMenu }:RestaurantTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <tr key={restaurant?.id}>
            <td>{restaurant?.name}</td>
            <td>{restaurant?.category}</td>
            <td>
              {restaurant.menu.map((menu) => (
                <RestaurantMenuList
                  key={menu.id}
                  restaurantMenu={menu}
                  mode="add"
                  handleSelectMenu={handleSelectMenu}
                />
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

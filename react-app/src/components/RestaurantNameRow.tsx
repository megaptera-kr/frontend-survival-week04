import Restaurant from '../types/Restaurant';

type RestaurantNameRow ={
    restaurant: Restaurant;
}

export default function RestaurantNameRow({ restaurant }: RestaurantNameRow) {
  return (<td className="restaurant-name-row">{restaurant.name}</td>);
}

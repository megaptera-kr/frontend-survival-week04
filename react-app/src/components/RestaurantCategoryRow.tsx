import Restaurant from '../types/Restaurant';

type RestaurantCategoryRowProps = {
    restaurant: Restaurant;
}

export default function RestaurantCategoryRow({ restaurant }: RestaurantCategoryRowProps) {
  return (<td className="restaurant-category-row">{restaurant.category}</td>);
}

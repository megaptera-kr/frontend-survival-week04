import { RESTAURANTS_CATEGORY, RestaurantCategoryWithAll, RestaurantFilter } from '../types';

interface RestaurantCategoryProps {
  handleCategoryClick: (category: RestaurantCategoryWithAll) => void;
  restaurantFilter: RestaurantFilter
}
export default function RestaurantCategories({
  handleCategoryClick,
  restaurantFilter,
}:RestaurantCategoryProps) {
  return (
    <nav style={{ display: 'flex', gap: '1rem' }}>
      {['전체', ...RESTAURANTS_CATEGORY].map((category) => (
        <button style={{ backgroundColor: category === restaurantFilter.category ? 'gray' : undefined }} type="button" key={category} onClick={() => handleCategoryClick(category as RestaurantCategoryWithAll)}>
          {category}
        </button>
      ))}
    </nav>
  );
}

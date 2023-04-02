import { useContext } from 'react';
import CATEGORIES from '../../constants/app';
import { RestaurantContext } from '../../contexts/RestaurantContext';
import { Category } from '../../types/restaurant';
import styles from './styles';

export default function CategoryBar() {
  const { searchRestaurants, searchParams } = useContext(RestaurantContext);

  const handleSearch = (category: Category) => () => {
    searchRestaurants?.({
      name: searchParams.name,
      category,
    });
  };

  return (
    <ul style={styles.categoryList}>
      {CATEGORIES.map((category) => (
        <li key={category} style={styles.categoryItem}>
          <button type="button" value={category} onClick={handleSearch(category)}>{category}</button>
        </li>
      ))}
    </ul>
  );
}

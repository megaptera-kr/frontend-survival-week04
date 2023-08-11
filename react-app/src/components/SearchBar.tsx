import { Restaurant } from '../types/restaurants';
import selectCategories from '../utils/selectCategories';

type SearchBarProps = {
  restaurants: Restaurant[],
  query: string,
  setQuery: (value: string) => void;
  foodType: string,
  setFoodType: (value: string) => void;
}

export default function SearchBar({
  restaurants, query, setQuery, foodType, setFoodType,
}: SearchBarProps) {
  const categories = selectCategories(restaurants);

  return (
    <div>
      <label htmlFor="input-text" style={{ paddingRight: '1rem' }}>검색</label>
      <input type="text" id="input-text" placeholder="식당 이름" />
      <ul style={{ display: 'flex', padding: '0', listStyle: 'none' }}>
        {['전체', ...categories].map((category) => (
          <li key={category} style={{ marginRight: '1rem' }}>
            <button type="button" onClick={() => setFoodType(category)}>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

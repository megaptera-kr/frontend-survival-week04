import { ChangeEvent } from 'react';

import selectCategories from '../utils/selectCategories';

import { Restaurant } from '../types/restaurants';

type SearchBarProps = {
  restaurants: Restaurant[],
  query: string,
  setQuery: (value: string) => void;
  setFoodType: (value: string) => void;
}

export default function SearchBar({
  restaurants, query, setQuery, setFoodType,
}: SearchBarProps) {
  const categories = selectCategories(restaurants);

  return (
    <div style={{ marginBottom: '2rem' }}>
      <label htmlFor="input-text" style={{ paddingRight: '1rem' }}>검색</label>
      <input
        type="text"
        id="input-text"
        placeholder="식당 이름"
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.currentTarget.value)}
      />
      <ul style={{ display: 'flex', padding: '0', listStyle: 'none' }}>
        {['전체', ...categories].map((category) => (
          <li key={category} style={{ marginRight: '1rem' }}>
            <button
              type="button"
              onClick={() => setFoodType(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

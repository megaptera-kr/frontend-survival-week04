import { ChangeEvent } from 'react';

import CategoryRow from './CategoryRow';

import useFetchRestaurants from '../hooks/useFetchRestaurants';
import selectCategories from '../hooks/selectCategories';

type SearchBarProps = {
  filterText : string;
  setFilterText : (text: string) => void;
  setFilterCategory: (text: string) => void;
}

export default function SearchBar({
  filterText,
  setFilterText,
  setFilterCategory,
}: SearchBarProps) {
  const restaurants = useFetchRestaurants();

  const categories = selectCategories(restaurants);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <div>
      <div>
        <label
          style={{ paddingRight: '1rem' }}
          htmlFor="input-search"
        >
          검색
        </label>
        <input
          id="input-search"
          type="text"
          placeholder="식당 이름"
          value={filterText}
          onChange={handleChange}
        />
      </div>
      <ul style={{ display: 'flex', padding: '0px', listStyle: 'none' }}>
        {
          ['전체', ...categories]?.map(
            (category) => (
              <CategoryRow
                key={category}
                category={category}
                setFilterCategory={setFilterCategory}
              />
            ),
          )
        }
      </ul>
    </div>
  );
}

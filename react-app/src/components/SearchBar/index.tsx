import { ChangeEventHandler, useContext } from 'react';
import { RestaurantContext } from '../../contexts/RestaurantContext';
import styles from './styles';

export default function SearchBar() {
  const { searchRestaurants, searchParams } = useContext(RestaurantContext);

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    searchRestaurants?.({
      name: e.target.value,
      category: searchParams.category,
    });
  };

  return (
    <div style={styles.searchBar}>
      <label htmlFor="search" style={styles.searchLabel}>
        검색
      </label>
      <input id="search" type="text" placeholder="식당 이름" value={searchParams.name} onChange={handleSearch} />
    </div>
  );
}

import { useContext } from 'react';
import { RestaurantContext } from '../../contexts/RestaurantContext';
import RestaurantItem from '../RestaurantItem';
import styles from './styles';

export default function RestaurantList() {
  const { restaurants } = useContext(RestaurantContext);

  return (
    <div>
      <ul style={styles.restaurantList}>
        <li style={{ ...styles.listTitle, ...styles.listItem }}>
          <span style={{ textAlign: 'center' }}>
            식당 이름
          </span>
          <span>종류</span>
          <span>메뉴</span>
        </li>
        {restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} style={styles.listItem} restaurant={restaurant} />
        ))}
      </ul>
    </div>
  );
}

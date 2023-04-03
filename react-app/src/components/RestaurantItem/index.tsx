import { CSSProperties, useContext } from 'react';
import { OrderContext } from '../../contexts/OrderContext';
import { Menu, Restaurant } from '../../types/restaurant';
import toLocaleCurrency from '../../utils/format';
import styles from './styles';

type RestaurantItemProps = {
  style: CSSProperties | undefined
  restaurant: Restaurant
}
export default function RestaurantItem({ style, restaurant }: RestaurantItemProps) {
  const { setCart, cart } = useContext(OrderContext);

  const handleClickMenu = (menu: Menu) => () => {
    setCart?.([...cart, menu]);
  };

  return (
    <li style={style}>
      <span>{restaurant.name}</span>
      <span>{restaurant.category}</span>
      <span>
        <ul style={styles.menuWrapper}>
          {restaurant.menu.map((menu: Menu) => (
            <li key={menu.id} style={styles.menu}>
              <span style={styles.menuName}>
                {menu.name}
                {' '}
                (
                {toLocaleCurrency(menu.price)}
                원)
              </span>
              <button type="button" name={`#${menu.name}`} onClick={handleClickMenu(menu)}>선택</button>
            </li>
          ))}
        </ul>
      </span>
    </li>
  );
}

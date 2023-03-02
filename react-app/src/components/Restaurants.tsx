import { MenuType, RestaurantType } from '../types/restaurants';
import Restaurant from './Restaurant';

type PropTypes = {
  restaurantList: RestaurantType[];
  handleAddClick: (menu: MenuType) => void;
};

export default function Restaurants({
  restaurantList = [],
  handleAddClick,
}: PropTypes) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '150px 100px 200px',
        marginTop: 50,
        rowGap: 20,
      }}
    >
      <h3 style={{ textAlign: 'center' }}>식당이름</h3>
      <h3 style={{ textAlign: 'center' }}>종류</h3>
      <h3 style={{ textAlign: 'center' }}>메뉴</h3>
      {restaurantList.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          handleAddClick={handleAddClick}
        />
      ))}
    </div>
  );
}

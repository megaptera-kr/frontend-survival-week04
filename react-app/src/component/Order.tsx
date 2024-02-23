import RestaurantMenu from '../types/RestaurantMenuType';

type OrderProps = {
  restaurantMenu: RestaurantMenu;
};

export default function Order({ restaurantMenu }: OrderProps) {
  return (
    <div>
      <span>
        {restaurantMenu.name}({restaurantMenu.price})
      </span>
      <button type='button'>취소</button>
    </div>
  );
}

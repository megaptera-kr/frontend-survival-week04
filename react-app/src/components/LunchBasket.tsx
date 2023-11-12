import { MenuItem } from '../types/restaurantItemType';
import Stack from './atoms/Stack';

type LunchBasketProps = {
  title: string;
  price: number;
  addedMenus: MenuItem[];
  handleDelete: (idx: number) => void;
  handleOrders: () => void;
};

export default function LunchBasket({
  title,
  price,
  addedMenus,
  handleDelete,
  handleOrders,
}: LunchBasketProps) {
  return (
    <Stack type="column" id="lunch-basket-container">
      <h2 className="title-section">{title}</h2>

      {addedMenus.length > 0 ? (
        <Stack id="lunch-basket-wrraper" type="column">
          {addedMenus.map((item, index) => (
            <Stack id="lunch-basket-item" type="row" key={Math.random()}>
              {item.name}
              (
              {item.price.toLocaleString()}
              원)
              <button type="button" onClick={() => handleDelete(index)}>
                취소
              </button>
            </Stack>
          ))}
        </Stack>
      ) : (
        <Stack id="lunch-basket-wrraper-empty" type="column">
          선택된 메뉴가 없습니다.
        </Stack>
      )}
      <button className="cta-button" type="button" onClick={handleOrders}>
        합계:
        {' '}
        {price.toLocaleString()}
        원 주문
      </button>
    </Stack>
  );
}

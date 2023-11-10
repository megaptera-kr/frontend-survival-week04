import { MenuItem } from '../types/restaurantItemType';

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
    <div>
      <h2>{title}</h2>
      <div>
        {addedMenus?.map((item, index) => (
          <div key={index}>
            {item.name}({item.price.toLocaleString()}
            원)
            <button type='button' onClick={() => handleDelete(index)}>
              취소
            </button>
          </div>
        ))}
      </div>
      <button type='button' onClick={handleOrders}>
        합계: {price.toLocaleString()}원 주문
      </button>
    </div>
  );
}

import { LunchCarts } from '../../types/restaurants';

type LunchCartsProps = {
  lunchCarts: LunchCarts[];
  totalPrice: number;
  handleClickDeleteMenu: (id: string) => () => void;
  handleClickOrder: () => void;
};

export default function Carts({
  lunchCarts,
  totalPrice,
  handleClickDeleteMenu,
  handleClickOrder,
}: LunchCartsProps) {
  return (
    <div>
      <h2>점심 바구니</h2>
      <ul>
        {lunchCarts.map((lunchCart) => (
          <li key={lunchCart.id}>
            <span>
              {lunchCart.name}({lunchCart.price})
            </span>
            <span>
              <button
                type="button"
                onClick={handleClickDeleteMenu(lunchCart.id)}
              >
                취소
              </button>
            </span>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleClickOrder}>
        합계: {totalPrice.toLocaleString()}원 주문
      </button>
    </div>
  );
}

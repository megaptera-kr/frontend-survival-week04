import { Dispatch, SetStateAction } from 'react';
import Menu from '../types/Menu';

type CartListProps = {
  cartList: Menu[]
  setCartList: Dispatch<SetStateAction<Menu[]>>
}

export default function CartList({ cartList, setCartList }: CartListProps) {
  const handleClickCartButton = (index: number) => {
    const cancleCartList = cartList.filter((cartItem, cartIdx) => cartIdx !== index);
    setCartList(cancleCartList);
  };

  return (
    <ul style={{
      width: '20%',
    }}
    >
      {
        cartList?.map((cart, index) => (
          <li
            key={`cart-${cart.name}-${index.toString()}`}
            style={{
              display: 'flex',
              paddingBlock: '0.5rem',
            }}
          >
            <span
              style={{
                margin: '0px auto',
              }}
            >
              {cart.name}
              (
              {cart.price.toLocaleString('ko-kr')}
              원)
            </span>
            <button
              type="button"
              style={{
                marginLeft: '0.5rem',
              }}
              onClick={() => {
                handleClickCartButton(index);
              }}
            >
              취소
            </button>
          </li>
        ))
      }
    </ul>
  );
}

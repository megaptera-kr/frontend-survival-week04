import { MenuInterface } from '../../Interfaces/Restaurant.interface';

interface CartProps {
  menu: MenuInterface[]
  totalPrice: number
  handleSetCart: () => void
}

const url = 'http://localhost:3000/order'

function Cart({ menu, totalPrice, handleSetCart }: CartProps) {
  const onSubmit = () => {
    const postData = {
      menu,
      totalPrice
    }
    console.log('전송 데이터 :: ', postData)
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(postData)
    })
  }
  return (
    <div>
      <h3>점심 바구니</h3>
      <ul>
        {menu.map(item => <li key={`cart_${item.id}`}>{item.name}({item.price} 원)</li>)}
      </ul>
      <button type="button" onClick={onSubmit}>합계 : {totalPrice}원 주문</button>
    </div >
  );
}

export default Cart;

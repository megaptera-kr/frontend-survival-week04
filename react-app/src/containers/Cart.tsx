import { useLocalStorage } from "usehooks-ts";
import { Menu, PATH } from "../../../common";

const Cart = () => {
  const [cart, setCart] = useLocalStorage<Menu[]>("cart", []);
  const [_, setReceipt] = useLocalStorage("receipt", {});

  const payload = cart.reduce<{
    id: string;
    menus: Menu[];
    totalPrices: number;
  }>(
    (prev, curr) => {
      prev.menus.push(curr);
      prev.totalPrices += curr.price;
      return prev;
    },
    {
      id: Date.now().toString(),
      menus: [],
      totalPrices: 0,
    }
  );

  const handlePayment = async () => {
    try {
      const res = await fetch(`http://localhost:3001/${PATH.orders}`, {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        method: "POST",
      });

      const resToJson = await res.json();

      const { data } = resToJson;
      setCart([]);
      setReceipt(data);
    } catch (error) {}
  };

  const handleCartOutBtn = (menuIndex: number) => {
    setCart(prev => prev.filter((row, index) => index !== menuIndex));
  };

  return (
    <article>
      <h2>점심 바구니</h2>
      <ul>
        {cart.map((menu, index) => (
          <li key={`${menu.id}_${index}`}>
            {menu.name}({menu.price})
            <button onClick={() => handleCartOutBtn(index)}>취소</button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handlePayment} disabled={!cart.length}>
        {`합계 ${payload.totalPrices.toLocaleString()}원 주문`}
      </button>
    </article>
  );
};

export default Cart;

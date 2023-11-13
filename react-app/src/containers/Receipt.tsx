import { useInterval, useLocalStorage } from "usehooks-ts";
import { Orders } from "../../../common";

const Receipt = () => {
  const [receipt, setReceipt] = useLocalStorage<Orders | null>("receipt", null);

  useInterval(
    () => {
      setReceipt(null);
    },
    receipt ? 5000 : null
  );

  if (!receipt) return;

  return (
    <article>
      <h2>영수증</h2>
      <section>
        <h3>주문번호</h3>
        <p>{receipt.id}</p>
      </section>
      <section>
        <h3>주문목록</h3>
        <ul>
          {receipt.menus.map((menu, index) => (
            <li
              key={`${menu.id}_${index}`}
            >{`${menu.name}(${menu.price}원)`}</li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Receipt;

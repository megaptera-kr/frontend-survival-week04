import { useReceiptStorage } from "../hooks/useStorage";
import useReceiptInterval from "../hooks/useReceiptInterval";

const Receipt = () => {
  const { receipt } = useReceiptStorage();

  useReceiptInterval();

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

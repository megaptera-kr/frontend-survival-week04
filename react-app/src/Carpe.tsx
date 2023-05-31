import { useInterval } from 'usehooks-ts';

type CarpeProps = {
    receiptid: string;
    setReceiptid: (value: string) => void;
    receiptmenu: {
        id: string;
        name: string;
        price: number;
    }[]
    setReceiptmenu: (value: {
        id: string;
        name: string;
        price: number;
    }[]) => void
    receiptprice: number
    setReceiptprice: (value: number) => void;
}

export default function Carpe({
  receiptid, setReceiptid, receiptmenu, setReceiptmenu, receiptprice, setReceiptprice,
} : CarpeProps) {
  if (receiptid !== '') {
    useInterval(() => {
      setReceiptid('');
      setReceiptmenu([]);
      setReceiptprice(0);
    }, 5000);
  }

  return (
    <>
      <p>[영수증]</p>
      <p>주문번호</p>
      {receiptid}
      <p>주문내역</p>
      {receiptmenu.map((rm) => (
        <div key={rm.id}>
          {rm.name}
          (
          {rm.price}
          )
        </div>
      ))}
      <p>총 가격</p>
      {receiptprice}
    </>
  );
}

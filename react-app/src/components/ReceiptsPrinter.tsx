import Table from './Table';
import SelectableList from './SelectableList';
import Food from './Food';
import type { Receipts } from '../types/kiosk';
import { Columns } from '../types/table';

interface ReceiptsProps {
  receipts: Receipts | null;
}

export default function ReceiptsPrinter({ receipts }: ReceiptsProps) {
  const columns: Columns<Receipts, keyof Receipts> = [
    {
      key: 'id',
      label: '주문번호',
    },
    {
      key: 'menu',
      label: '주문목록',
    },
    {
      key: 'totalPrice',
      label: '총 가격',
    },
  ];

  const renderColumns = (data: Receipts, key: keyof Receipts) => {
    switch (key) {
    case 'id':
      return (
        `${data[key]}`
      );

    case 'menu':
      return (
        <SelectableList
          direct="column"
          items={data[key]}
          renderItem={(item) => (
            <Food
              name={item.name}
              price={item.price}
            />
          )}
        />
      );

    case 'totalPrice':
      return (`총 가격: ${data[key].toLocaleString()}원`);

    default: {
      const exhaustiveCheck: never = key;
      throw new Error(`unknown column key: ${exhaustiveCheck}`);
    }
    }
  };

  if (!receipts) {
    return <span>[영수증 나오는 곳]</span>;
  }

  return (
    <article>
      <h2>영수증</h2>
      <Table title="영수증" data={[receipts]} columns={columns} renderColumns={renderColumns} />
    </article>
  );
}

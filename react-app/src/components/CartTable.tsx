import Table from './Table';
import { FoodMenu } from '../types/kiosk';
import { Columns } from '../types/table';

interface CartTableProps {
  cartItems: FoodMenu[];
  removeFromCart: (food: FoodMenu) => () => void;
}

export default function CartTable({ cartItems, removeFromCart }: CartTableProps) {
  const columns: Columns<FoodMenu, keyof FoodMenu> = [
    {
      key: 'name',
      label: '음식 명',
    },
    {
      key: 'price',
      label: '음식 가격',
    },
    {
      key: 'id',
      label: '제거하기',
    },
  ];

  const renderColumns = (data: FoodMenu, key: keyof FoodMenu) => {
    switch (key) {
    case 'name':
    case 'price':
      return data[key];

    case 'id':
      return (<button type="button" onClick={removeFromCart(data)}>제거</button>);

    default: {
      const exhaustiveCheck: never = key;
      throw new Error(`unknown column key: ${exhaustiveCheck}`);
    }
    }
  };

  return <Table title="점심 바구니" data={cartItems} columns={columns} renderColumns={renderColumns} />;
}

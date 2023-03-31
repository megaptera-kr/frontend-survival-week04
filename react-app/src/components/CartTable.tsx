import Table from './Table';
import { FoodMenu } from '../types/kiosk';
import { WithoutId } from '../types/common';
import { Columns } from '../types/table';

interface CartTableProps {
  cartItems: FoodMenu[];
}

type CartColumnKey = WithoutId<FoodMenu>;

export default function CartTable({ cartItems }: CartTableProps) {
  const columns: Columns<FoodMenu, CartColumnKey> = [
    {
      key: 'name',
      label: '음식 명',
    },
    {
      key: 'price',
      label: '음식 가격',
    },
  ];

  return <Table title="점심 바구니" data={cartItems} columns={columns} renderColumns={(data, key) => data[key]} />;
}

import Table from './Table';
import SelectableList from './SelectableList';
import Food from './Food';
import type { Restaurant, FoodMenu } from '../types/kiosk';
import type { Columns } from '../types/table';
import type { WithoutId } from '../types/common';

interface RestaurantsTableProps {
  restaurants: Restaurant[];
  addToCart: (item: FoodMenu) => () => void;
}

type RestaurantColumnKey = WithoutId<Restaurant>;

export default function RestaurantsTable({ restaurants, addToCart }: RestaurantsTableProps) {
  const columns: Columns<Restaurant, RestaurantColumnKey> = [
    {
      key: 'category',
      label: '식당 종류',
    },
    {
      key: 'name',
      label: '식당 명',
    },

    {
      key: 'menu',
      label: '메뉴',
    }];

  const renderColumns = (data: Restaurant, key: RestaurantColumnKey) => {
    switch (key) {
    case 'category':
    case 'name':
      return data[key];

    case 'menu':
      return (
        <SelectableList
          direct="column"
          items={data[key]}
          renderItem={(item) => (
            <Food
              name={item.name}
              price={item.price}
              onClick={addToCart(item)}
            />
          )}
        />
      );

    default: {
      const exhaustiveCheck: never = key;
      throw new Error(`unknown column key: ${exhaustiveCheck}`);
    }
    }
  };

  return (
    <section>
      <h2>메뉴 판</h2>
      <Table
        title="식당 메뉴표"
        data={restaurants}
        columns={columns}
        renderColumns={renderColumns}
      />
    </section>
  );
}

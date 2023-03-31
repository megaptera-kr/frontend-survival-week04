/* eslint-disable react/require-default-props */

import { hasId } from '../utils/guard';

type Direct = 'row' | 'column';

interface SelectableListProps<T> {
  direct?: Direct;
  items: T[];
 renderItem: (props: T) => React.ReactNode;
}

export default function SelectableList<T>({
  direct = 'row', items, renderItem,
}: SelectableListProps<T>) {
  return (
    <ul style={{
      display: 'flex', flexDirection: direct, padding: '0', gap: '4px', listStyle: 'none',
    }}
    >
      {items.map((item) => (
        <li key={hasId(item) ? item.id : String(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

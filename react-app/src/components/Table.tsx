import type { Columns } from '../types/table';
import type { WithId } from '../types/common';

interface TableProps<T, K extends keyof T> {
  title: string;
  data: WithId<T>[];
  columns: Columns<T, K>;
  renderColumns: (data: T, key: K) => React.ReactNode;
}

export default function Table<T, K extends keyof T>({
  title, columns, data, renderColumns,
}: TableProps<T, K>) {
  return (
    <table style={{ border: '1px solid black', backgroundColor: 'black' }}>
      <caption>{title}</caption>
      <thead style={{ backgroundColor: 'white' }}>
        <tr>
          {columns.map(({ label }) => (
            <th key={label} scope="col">
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody style={{ backgroundColor: 'white' }}>
        {data.map((rowItem) => (
          <tr key={rowItem.id}>
            {columns.map(({ key }) => (
              <td key={key}>
                {renderColumns(rowItem, key)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

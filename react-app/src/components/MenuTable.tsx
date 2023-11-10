import { Restaurants } from '../types/types';
import MenuTableRow from './MenuTableRow';

export default function MenuTable({ restaurants }:{restaurants: Restaurants[]}) {
  return (
    <table className="MenuTable">
      <thead>
        <th>
          식당 이름
        </th>
        <th>종류</th>
        <th>메뉴</th>
      </thead>
      <tbody>
        {
          restaurants.map((product) => (
            <MenuTableRow product={product} key={`product-key-${product.id}`} />
          ))
        }
      </tbody>
    </table>
  );
}

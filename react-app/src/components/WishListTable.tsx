import MenuWithCount from '../types/MenuWithCount';
import WishListMenuRow from './WishListMenuRow';

type WishListTableProps = {
  menuList: MenuWithCount[];
}

export default function WishListTable({
  menuList,
}: WishListTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>메뉴</th>
          <th>가격</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody>
        {menuList.map((menuItem) => (
          <WishListMenuRow
            key={menuItem.id}
            menu={menuItem}
          />
        ))}
      </tbody>
    </table>
  );
}

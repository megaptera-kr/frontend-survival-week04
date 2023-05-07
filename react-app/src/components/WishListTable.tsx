import useWishList from '../hooks/useWishList';
import aggregateMenu from '../utils/aggregateMenu';
import WishListMenuRow from './WishListMenuRow';

export default function WishListTable() {
  const { wishList } = useWishList();

  const menuList = aggregateMenu(wishList.menu);

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

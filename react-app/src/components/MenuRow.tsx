import useWishList from '../hooks/useWishList';
import Menu from '../types/Menu';

type MenuRowProps ={
  menu : Menu;
}

export default function MenuRow({
  menu,
}: MenuRowProps) {
  const [wishList, updateWishList] = useWishList();

  const handleclick = () => {
    updateWishList(menu);
  };

  return (
    <li>
      <span>
        {`${menu.name}(${menu.price.toLocaleString()}원)` }
      </span>
      <button
        id={menu.id}
        type="button"
        onClick={handleclick}
      >
        선택
      </button>
    </li>
  );
}

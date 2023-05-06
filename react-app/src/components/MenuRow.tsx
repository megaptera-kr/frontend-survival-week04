import Menu from '../types/Menu';

type MenuRowProps ={
  menu : Menu;
}

export default function MenuRow({
  menu,
}: MenuRowProps) {
  function orderList에추가(menuItem: Menu) {
    console.log('만들어야함');
  }

  const handleclick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    orderList에추가(menu);
    console.log(event.currentTarget);
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

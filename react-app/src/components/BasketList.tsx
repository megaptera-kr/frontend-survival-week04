import useMenuBasket from '../hooks/useMenuBasket';
import MenuActionButton from './MenuAddButton';
import MenuListItem from './MenuListItem';

export default function BasketList() {
  const { basket, removeMenu } = useMenuBasket();

  return (
    <ul
      style={{
        width: '20%',
      }}
    >
      {basket.map((basketItem, index) => (
        <MenuListItem
          key={basketItem.id}
          menuItem={basketItem}
        >
          <MenuActionButton
            title="취소"
            onClick={() => removeMenu(index)}
          />
        </MenuListItem>
      ))}
    </ul>
  );
}

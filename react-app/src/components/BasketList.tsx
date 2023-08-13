import useMenuBasket from '../hooks/useMenuBasket';
import MenuActionButton from './MenuAddButton';
import MenuListItem from './MenuListItem';

export default function BasketList() {
  const { basket, removeMenu } = useMenuBasket();

  return (
    <ul>
      {basket.map((basketItem, index) => {
        const keyId = `${basketItem.id}-${index}`;

        return (
          <MenuListItem
            key={keyId}
            menuItem={basketItem}
          >
            <MenuActionButton
              name={`#${basketItem.name}`}
              title="취소"
              onClick={() => removeMenu(index)}
            />
          </MenuListItem>
        );
      })}
    </ul>
  );
}

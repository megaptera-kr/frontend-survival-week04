import Menu from '../types/Menu';
import MenuWithCount from '../types/MenuWithCount';

export default function aggregateMenu(menuList : Menu[]) {
  const menuListWithCount : MenuWithCount[] = menuList.map((menu) => (
    { ...menu, count: 1 }
  ));

  const aggregatedMenu = menuListWithCount.reduce((
    acc:MenuWithCount[],
    item:MenuWithCount,
  ) => {
    const existingItem = acc.find((i:MenuWithCount) => i.id === item.id);

    if (existingItem) {
      existingItem.count += 1;
    } else {
      acc.push({ ...item, count: 1 });
    }
    return acc;
  }, []);
  return aggregatedMenu;
}

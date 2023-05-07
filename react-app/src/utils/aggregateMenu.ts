import Menu from '../types/Menu';

type aggregateMenuParams = {
  menuList : Menu[];
}

type MenuWithCount = Menu & { count : number};

export default function aggregateMenu(menuList : Menu[]) {
  // 돌면서 -> 이전 모음에 id가 있으면 1 추가, 없으면 통째 추가 1 설정
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

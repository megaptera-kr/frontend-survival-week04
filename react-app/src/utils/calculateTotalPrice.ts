import Menu from '../types/Menu';

export default function calculateTotalPrice(selectedMenus: Menu[]): number {
  return selectedMenus
    .reduce((acc, selectedMenu) => acc + selectedMenu.price, 0);
}

import Menu from './Menu';

export type Category = '전체' | '한식' | '중식' | '일식';

interface Restaurant {
  id: string;
  category: Category;
  name: string;
  menu: Menu[];
}

export default Restaurant;

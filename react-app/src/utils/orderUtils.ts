import Menu from '../types/Menu';

export const reduceOrders = (menus: Menu[]) => {
  const result = menus?.reduce(
    (acc, menu) => (acc.filter((a) => a.name === menu.name).length > 0 ? acc : [...acc, menu]),
    [] as Menu[],
  );
  return result;
};

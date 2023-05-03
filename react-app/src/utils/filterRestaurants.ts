import Restaurant from '../types/Restaurant';

const normalize = (text:string) => (
  text.trim().toLocaleLowerCase()
);

const filterRestaurants = (
  restaurants:Restaurant[],
  filterText: string,
  filterCategory:string,
) => {
  const filterTextResult = restaurants.filter((restaurant) => {
    const lowerCaseName = normalize(restaurant.name);
    return lowerCaseName.includes(normalize(filterText));
  });

  if (filterCategory === '전체') return filterTextResult;

  const filterCategoryAndTextResult = filterTextResult.filter((restaurant) => (
    restaurant.category.includes(filterCategory)
  ));

  return filterCategoryAndTextResult;
};

export default filterRestaurants;

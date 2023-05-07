import Restaurant from '../types/Restaurant';

type FilterCondition = {
    filterText: string;
    filterCategory: string;
}

export default function filterData(
  restaurants: Restaurant[],
  { filterText, filterCategory }: FilterCondition,
) {
  let filteredData = filterCategory === '전체'
    ? restaurants
    : restaurants.filter((restaurant) => restaurant.category === filterCategory);

  if (filterText.length) {
    // 검색어의 공백 제거
    const query = filterText.replace(/\s/g, '');
    filteredData = filteredData.filter((restaurant) => restaurant.name.includes(query));
  }

  return filteredData;
}

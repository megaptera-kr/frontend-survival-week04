import RestaurantsType from '../types/RestaurantsType';

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
  //   trim()은 문자열의 앞뒤 양 끝의 공백을 제거해주는 메서드
  //  ex) "   안녕  " -> "안녕"
  //  toLocaleLowerCase()는 대소문자가 입력됐을 시 모두 소문자로
  //  변경시켜주는 메서드

// 고로 normalize는 매개변수로 받는 text를 공백과 대소문자를
// 정돈하여 내보내주는 함수이다.
}

type FilterMenuType = {
    filterText: string,
    filterCategories: string
}

export default function filterRestaurants(
  restaurants: RestaurantsType[],
  { filterText, filterCategories }: FilterMenuType,
): RestaurantsType[] {
  const match = (restaurant: RestaurantsType) => (restaurant.category === filterCategories);
  // match는 함수로 매개변수로 restaurant를 받고 restaurant안에
  // 카테고리와 필터된 카테고리가 같은지 확인해준다.

  const filteredRestaurants = filterCategories === '전체'
    ? restaurants
    : restaurants.filter(match);
    // 삼항연산자로 '전체' 라면 restaurants를 내주고
    // 그게 아니라면 필터된 결과를 내준다.

  const query = normalize(filterText);

  if (!query) {
    return filteredRestaurants;
    // query가 비어있다면 레스토랑 값 내주기
  }

  const contains = (restaurant: RestaurantsType) => (
    normalize(restaurant.name).includes(query)
  );
  // 위 함수는 restaurant를 받아와 normalize를 사용해 restaurant.name을
  // 한번 정리한(정규화 처리?) 후 includes(query)를 해준다.
  // includes는 문자열에서 특정 부분이 존재하는지 확인하는 메서드로
  // 정규화처리 된 name에 query가 있는지 확인 후
  // 포함이 되었다면 true 아니라면 false를 반환한다.

  return filteredRestaurants.filter(contains);
}

/**
2. 식당 목록에 있는 음식들을 담고, 주문할 수 있는 점심 바구니를 만들어 주세요.
    - 사용자는 식당의 메뉴별로 붙어있는 선택 버튼을 통해 점심 바구니에 음식을 담을 수 있다.
    - 사용자는 동일한 메뉴를 담을 수 있다.
    - 사용자는 점심 바구니에 담긴 메뉴의 총 가격을 주문버튼에서 볼 수 있다.
    - 사용자는 주문 버튼을 통해 주문할 수 있다. (서버에 주문 생성 요청 `/POST orders`)
    - 사용자는 주문을 완료하면 아래에 영수증을 볼 수 있다.
        - 사용자는 영수증에서 주문번호와 주문한 음식 목록, 총 가격을 볼 수 있다.
        - 영수증은 5초뒤에 사라진다.
 */

import FilterableRestaurantTable from './components/FilterableRestaurantTable';

export default function App() {
  return (
    <FilterableRestaurantTable />
  );
}

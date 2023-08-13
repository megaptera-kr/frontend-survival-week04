export const BASE_URL = 'http://localhost:3000';

export interface PostOrdersPayload {
  /** 주문한 음식 목록 */
  menu: {
    /** 음식 아이디 */
    id: string;
    /** 음식 이름 */
    name: string;
    /** 음식 가격 */
    price: number;
  }[];
  /** 주문한 음식 총 가격 */
  totalPrice:number;
}

export interface PostOrdersResponse extends PostOrdersPayload {
  /** 주문 번호 */
  id: string;
}

export const orderRestaurantsMenus = async (payload: PostOrdersPayload) => {
  try {
    const response = await fetch(`${BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...payload }),
    });

    const data = await response.json();

    return data;
  } catch (err) {
    // ...

    return null;
  }
};

import Menu from '../types/Menu';

import getTotalPrice from '../components/cart/utils/totalPrice';

async function apiPostCreateOrder(menu: Menu[]) {
  // API 호출
  const url = 'http://localhost:3000/orders';

  const totalPrice = getTotalPrice(menu);

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ menu, totalPrice }),
  });

  const { receipt } = await res.json();

  return receipt;
}

export default apiPostCreateOrder;

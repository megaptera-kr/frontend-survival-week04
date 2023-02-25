import Menu from '../types/Menu';

import calculateTotalPrice from '../utils/calculateTotalPrice';
import thousandSeparator from '../utils/thousandSeparator';

type OrderButtonProps = {
    selectedMenus: Menu[];
}

export default function OrderButton({ selectedMenus }: OrderButtonProps) {
  const totalPrice = calculateTotalPrice(selectedMenus);

  const handleClick = async (data: Menu[]) => {
    const requestData = { menu: data, totalPrice };

    const url = 'http://localhost:3000/orders';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    console.log(await response.json());

    // const body = await response.json();
  };

  return (
    <button type="button" onClick={() => handleClick(selectedMenus)}>
      합계:
      {' '}
      {thousandSeparator(totalPrice)}
      원 주문
    </button>
  );
}

import Menu from '../types/Menu';
import Receipt from '../types/Receipt';

import calculateTotalPrice from '../utils/calculateTotalPrice';
import thousandSeparator from '../utils/thousandSeparator';

type OrderButtonProps = {
    selectedMenus: Menu[];
    setSelectedMenus: (menus: Menu[]) => void;
    setReceipt: (receipt: Receipt) => void;
}

export default function OrderButton({
  selectedMenus, setSelectedMenus, setReceipt,
}: OrderButtonProps) {
  const totalPrice = calculateTotalPrice(selectedMenus);

  const handleClick = async (data: Menu[]) => {
    if (!data.length) {
      return;
    }

    const requestData = { menu: data, totalPrice };

    const url = 'http://localhost:3000/orders';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    const receipt = await response.json();
    setReceipt(receipt);
    setSelectedMenus([]);
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

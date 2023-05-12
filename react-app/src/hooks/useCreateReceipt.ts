import Food from '../type/Food';

const url = 'http://localhost:3000/orders';

type useCreateReceiptProps = {
  menuCart : Food[],
  totalPrice : number
}

export default function useCreateReceipt({ menuCart, totalPrice }: useCreateReceiptProps) {
  const menu = menuCart;
  async function CreateFReceipt() {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, totalPrice }),

    });
    const { receipt } = await response.json();
    return receipt;
  }
  return CreateFReceipt();
}

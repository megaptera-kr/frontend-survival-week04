import Menu from '../types/Menu';

const url = 'http://localhost:3000/orders';

const usePostOrder = () => {
  const postOrder = async (menu: Menu[], totalPrice: number) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, totalPrice }),
    });

    const { receipt } = await res.json();

    return receipt;
  };

  return {
    postOrder,
  };
};

export default usePostOrder;

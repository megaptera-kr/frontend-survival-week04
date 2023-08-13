import { useLocalStorage } from 'usehooks-ts';

import { IReceipt } from '../types/restaurants';

export default function useReceipt() {
  const [receipt, setReceipt] = useLocalStorage<IReceipt | null>('receipt', null);

  const addReceipt = (newReceipt: IReceipt) => {
    setReceipt(newReceipt);
  };

  const clearReceipt = () => {
    setReceipt(null);
  };

  return {
    receipt,
    addReceipt,
    clearReceipt,
  };
}

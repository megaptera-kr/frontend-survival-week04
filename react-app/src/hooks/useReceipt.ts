import { useLocalStorage } from 'usehooks-ts';

export default function useReceipt() {
  const [receipt, setReceipt] = useLocalStorage<any>('receipt', null);

  return {
    receipt,
    setReceipt,
  };
}

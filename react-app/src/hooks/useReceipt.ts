import { useEffect } from 'react';
import { useBoolean, useInterval, useLocalStorage } from 'usehooks-ts';

import Receipt from '../types/Receipt';

const useReceipt = () => {
  const { value, setTrue, setFalse } = useBoolean(false);

  const [receipt, setReceipt] = useLocalStorage('receipt', {} as Receipt);

  useEffect(() => {
    setFalse();

    if (receipt.id) {
      setTrue();
    }
  }, [receipt]);

  useInterval(() => {
    if (receipt.id) {
      setReceipt({} as Receipt);
      setFalse();
    }
  }, value ? 5000 : null);

  return { receipt, setReceipt };
};

export default useReceipt;

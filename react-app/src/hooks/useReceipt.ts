import { useState } from 'react';
import { useInterval } from 'usehooks-ts';
import { ReceiptType } from '../types/restaurants';

export default function useReceipt() {
  const [receipt, setReceipt] = useState<ReceiptType>();
  const [delay, setDelay] = useState<number | null>(null);

  useInterval(() => {
    setDelay(null);
    setReceipt(undefined);
  }, delay);

  const handleReceiptChange = (value: ReceiptType) => {
    setDelay(5_000);
    setReceipt(value);
  };

  return { receipt, setReceipt: handleReceiptChange };
}

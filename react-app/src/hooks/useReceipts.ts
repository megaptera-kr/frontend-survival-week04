import { useState } from 'react';
import { Receipts } from '../types/kiosk';

import useTimeout from './useTimeout';

interface useReceipts {
  receipts: Receipts;
  createReceipts: (receipts: Receipts) => void;
}

export default function useReceipts() {
  const [receipts, setReceipts] = useState<Receipts | null>(null);

  useTimeout(() => setReceipts(null), 5000, receipts);

  const createReceipts = (_receipts: Receipts) => {
    setReceipts(_receipts);
  };

  return { receipts, createReceipts };
}

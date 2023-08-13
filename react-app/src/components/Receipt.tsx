import { useInterval } from 'usehooks-ts';

import useReceipt from '../hooks/useReceipt';
import ReceiptDetails from './ReceiptDetails';

export default function Receipt() {
  const { receipt, clearReceipt } = useReceipt();
  const isPlaying = receipt !== null;

  useInterval(() => {
    clearReceipt();
  }, isPlaying ? 5_000 : null);

  return (
    <div style={{
      width: '30rem',
      padding: '1rem',
    }}
    >
      {
        receipt
          ? <ReceiptDetails receipt={receipt} />
          : <div>[영수증 나오는 곳]</div>
      }
    </div>
  );
}

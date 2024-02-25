import ReceiptItem from './components/ReceiptItem';

import useReceipt from './hooks/useReceipt';

export default function ReceiptContainer() {
  const { receipt } = useReceipt();
  return (
    <div>
      <h2>[영수증 나오는 곳]</h2>
      {receipt.menu && receipt.menu.length > 0 && <ReceiptItem receipt={receipt} />}
    </div>
  );
}

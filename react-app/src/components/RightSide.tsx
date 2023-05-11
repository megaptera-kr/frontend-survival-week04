import LunchCart from './LunchCart';
import ReceiptContainer from './ReceiptContainer';

export default function RightSide() {
  return (
    <div className="w-1/2 flex flex-col  ml-4">
      <LunchCart />
      <ReceiptContainer />
    </div>
  );
}

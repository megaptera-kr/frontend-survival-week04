import Orders from './Orders';

type Receipt = {
  orders: Orders[];
  totalPrice: number;
  receiptNo: string
}
export default Receipt;

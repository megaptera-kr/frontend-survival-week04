import menuType from './menuType';

type receiptType = {
  id: string,
  menu: menuType[],
  totalPrice: number,
}

export default receiptType;

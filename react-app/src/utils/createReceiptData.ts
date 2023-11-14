import { Menus } from '../../../common';

const createReceiptData = (cart: Menus) => {
	const receiptData = cart.reduce<{
    id: string;
    menus: Menus;
    totalPrice: number;
  }>(
  	(prev, curr) => {
  		prev.menus.push(curr);
  		prev.totalPrice += curr.price;
  		return prev;
  	},
  	{
  		id: Date.now().toString(),
  		menus: [],
  		totalPrice: 0,
  	},
  );

	return receiptData;
};

export default createReceiptData;

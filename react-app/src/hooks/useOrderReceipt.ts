import { useLocalStorage } from 'usehooks-ts';
import fetch from 'node-fetch';
import FetchOptions from '../types/FetchOptions';
import { WishList } from '../types/WishList';
import fetchUtils from '../utils/fetchUtils';

export default function useOrderReceipt() :{
  orderReceipt : WishList,
  fetchOrderReceipt : (bodyData : WishList) => void,
  clearOrderReceipt: ()=> void,
  } {
  const defaultOrderReceipt: WishList = { id: '', menu: [], totalPrice: 0 };

  const [orderReceipt, setOrderReceipt] = useLocalStorage('orderReceipt', defaultOrderReceipt);

  const fetchOrderReceipt = async (bodyData : WishList) => {
    const url = `${fetchUtils().authority}/orders`;
    const options: FetchOptions = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyData),
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setOrderReceipt(data);
    } catch (error) {
      setOrderReceipt(defaultOrderReceipt);
    }
  };

  const clearOrderReceipt = () => (
    setOrderReceipt(defaultOrderReceipt)
  );

  return {
    orderReceipt,
    fetchOrderReceipt,
    clearOrderReceipt,
  };
}

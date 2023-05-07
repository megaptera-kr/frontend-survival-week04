import { useFetch, useInterval, useLocalStorage } from 'usehooks-ts';
import { WishList } from '../types/WishList';
import useWishList from './useWishList';

type FetchOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  mode : 'cors' | 'no-cors' | 'cors' |'same-origin';
  headers: {
    'Content-Type': 'application/json'| 'application/x-www-form-urlencoded'
  };
  body: string;
}

export default function useOrderReceipt() :{
  orderReceipt : WishList,
  fetchOrderReceipt : (bodyData : WishList) => void,
  clearOrderReceipt: ()=> void,
  } {
  const defaultOrderReceipt: WishList = { id: '', menu: [], totalPrice: 0 };

  const [orderReceipt, setOrderReceipt] = useLocalStorage('orderReceipt', defaultOrderReceipt);

  const fetchOrderReceipt = async (bodyData : WishList) => {
    const url = 'http://localhost:3000/orders';
    const options: FetchOptions = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyData),
    };

    // const data = useFetch(url, options);
    // console.log(data);
    // setOrderReceipt(data as WishList);

    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data);
    setOrderReceipt(data);
  };

  const clearOrderReceipt = () => (
    setOrderReceipt(defaultOrderReceipt)
    // useInterval(() => {
    //   setOrderReceipt(defaultOrderReceipt);
    // }, 5_000)
  );

  return {
    orderReceipt,
    fetchOrderReceipt,
    clearOrderReceipt,
  };
}

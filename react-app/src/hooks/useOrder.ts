import { useState } from 'react';
import { Order } from '../types/Order';

const useOrder = () => {
  const [order, setOrder] = useState({} as Order);
  return {
    order,
    setOrder,
  };
};

export default useOrder;

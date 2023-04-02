import {
  createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState,
} from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Menu, Receipt } from '../types/restaurant';

type OrderContextValue = {
  cart: Menu[]
  setCart?: Dispatch<SetStateAction<Menu[]>>
  receipt: Receipt | null
  setReceipt?: Dispatch<SetStateAction<Receipt | null>>
}

type OrderProviderProps = {
  children: ReactNode
}

export const OrderContext = createContext<OrderContextValue>({
  cart: [],
  receipt: null,
});

export function OrderProvider({ children }: OrderProviderProps) {
  const [cart, setCart] = useLocalStorage<Menu[]>('cart', []);
  const [receipt, setReceipt] = useState<Receipt | null>(null);

  const contextValue = useMemo(() => ({
    cart,
    setCart,
    receipt,
    setReceipt,
  }), [cart, receipt]);

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
}

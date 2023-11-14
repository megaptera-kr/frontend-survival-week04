import { useLocalStorage } from "usehooks-ts";
import { Menu, Orders } from "../../../common";

export const storageKey = {
  cart: "cart",
  receipt: "receipt",
} as const;

const useStorage = <T>(key: keyof typeof storageKey, defaultValue: T) => {
  const [data, setData] = useLocalStorage<T>(key, defaultValue);

  return { data, setData };
};

export const useCartStorage = () => {
  const cartStorage = useStorage<Menu[]>(storageKey.cart, []);

  return { cart: cartStorage.data, setCart: cartStorage.setData };
}

export const useReceiptStorage = () => {
  const receiptStorage = useStorage<Orders | null>(storageKey.receipt, null);

  return { receipt: receiptStorage.data, setReceipt: receiptStorage.setData };
}

export default useStorage;
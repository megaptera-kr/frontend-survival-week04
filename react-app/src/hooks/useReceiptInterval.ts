import { useInterval } from "usehooks-ts";
import { useReceiptStorage } from "./useStorage";

const useReceiptInterval = (timer = 5000) => {
  const { receipt, setReceipt } = useReceiptStorage();

  useInterval(
    () => {
      setReceipt(null);
    },
    receipt ? timer : null
  );
}

export default useReceiptInterval;
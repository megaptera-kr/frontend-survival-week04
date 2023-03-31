import { useEffect, useRef } from 'react';

import { useIsomorphicLayoutEffect } from 'usehooks-ts';

function useTimeout<T>(callback: () => void, delay: number | null, ...dependency: T[]) {
  const savedCallback = useRef(callback);

  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const id = setTimeout(() => savedCallback.current(), delay);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(id);
  }, [delay, ...dependency]);
}

export default useTimeout;

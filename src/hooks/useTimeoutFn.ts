import { useCallback, useEffect, useRef } from 'react';

const useTimeoutFn = (fn: () => void, ms: number) => {
  const timeoutId = useRef<ReturnType<typeof setTimeout>>();
  const callback = useRef(fn);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      callback.current();
    }, ms);
  }, [ms]);

  const clear = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);
  }, []);

  useEffect(() => clear, [clear]);

  return [run, clear];
};

export default useTimeoutFn;

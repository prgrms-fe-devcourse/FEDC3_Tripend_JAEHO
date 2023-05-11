import { useEffect } from 'react';
import useTimeoutFn from './useTimeoutFn';

const useDebounce = (fn: () => void, ms: number, deps: string[]) => {
  const [run, clear] = useTimeoutFn(fn, ms);

  useEffect(run, deps);

  return clear;
};

export default useDebounce;

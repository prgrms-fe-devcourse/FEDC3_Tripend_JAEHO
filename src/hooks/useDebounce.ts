import { useEffect } from 'react';
import useTimeoutFn from './useTimeoutFn';

const useDebounce = (fn, ms, deps) => {
  const [run, clear] = useTimeoutFn(fn, ms);

  useEffect(run, deps);

  return clear;
};

export default useDebounce;

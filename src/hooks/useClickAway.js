import { useEffect, useRef } from 'react';
import { EVENT } from '../utils/constants/hooks';

const useClickAway = (handler) => {
  const ref = useRef(null);
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleEvent = (e) => {
      !ref.current.contains(e.target) && savedHandler.current(e);
    };

    for (const eventName of EVENT) {
      document.addEventListener(eventName, handleEvent);
    }

    return () => {
      for (const eventName of EVENT) {
        document.removeEventListener(eventName, handleEvent);
      }
    };
  }, [ref]);

  return ref;
};

export default useClickAway;

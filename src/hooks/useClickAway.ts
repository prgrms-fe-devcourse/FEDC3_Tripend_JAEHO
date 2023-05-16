import { useEffect, useRef } from 'react';
import { EVENT } from '@/utils/constants/hooks';

const useClickAway = (handler: () => void) => {
  const ref = useRef<HTMLDivElement>(null);
  const savedHandler = useRef<() => void>(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleEvent = (e: MouseEvent | TouchEvent) => {
      !ref.current?.contains(e.target as Node) && savedHandler.current();
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

import { useRef, useEffect } from 'react';

// 추후에 constant로 옮겨도 될듯
const events = ['mousedown', 'touchstart'];

const useClickAway = (handler) => {
  const ref = useRef(null);
  const savedHandler = useRef(handler);

  // 핸들러 함수가 변하더라도 리렌더링 안시키기 위함
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleEvent = (e) => {
      // element를 바로 사용하면, dom이 바뀐게 추적이 안됨. (image의 src같은 부분)
      !ref.current.contains(e.target) && savedHandler.current(e);
    };

    for (const eventName of events) {
      document.addEventListener(eventName, handleEvent);
    }

    return () => {
      for (const eventName of events) {
        document.removeEventListener(eventName, handleEvent);
      }
    };
  }, [ref]);

  return ref;
};

export default useClickAway;

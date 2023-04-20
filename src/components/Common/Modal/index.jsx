import { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import useClickAway from '@/hooks/useClickAway';
import { BackgroundDim, ModalContainer } from './style';

const Modal = ({ children, width = 500, height, visible = false, onClose, ...props }) => {
  const ref = useClickAway(() => {
    if (visible) {
      onClose && onClose();
    }
  });

  const containerStyle = useMemo(
    () => ({
      width,
      height,
    }),
    [width, height]
  );

  const element = useMemo(() => document.createElement('div', []));
  useEffect(() => {
    document.body.appendChild(element);
    return () => {
      document.body.removeChild(element);
    };
  });

  return ReactDOM.createPortal(
    <BackgroundDim style={{ display: visible ? 'block' : 'none' }}>
      <ModalContainer ref={ref} {...props} style={{ ...props.style, ...containerStyle }}>
        {children}
      </ModalContainer>
    </BackgroundDim>,
    element
  );
};

export default Modal;

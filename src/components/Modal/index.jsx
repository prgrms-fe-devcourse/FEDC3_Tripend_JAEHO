import { useMemo, useEffect } from 'react';
import { BackgroundDim, ModalContainer } from './style';
import useClickAway from '../../hooks/useClickAway';
import ReactDOM from 'react-dom';

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

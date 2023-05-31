import { CSSProperties, ReactNode, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import useClickAway from '@/hooks/useClickAway';
import { BackgroundDim, ModalContainer } from './style';

interface ModalProps {
  children: ReactNode;
  width?: number;
  height: number;
  visible?: boolean;
  styles?: CSSProperties;
  onClose: () => void;
}

const Modal = ({
  children,
  width = 500,
  height,
  visible = false,
  styles,
  onClose,
  ...props
}: ModalProps) => {
  const ref = useClickAway(() => {
    if (visible) {
      onClose();
    }
  });

  const containerStyle = useMemo(
    () => ({
      width,
      height,
    }),
    [width, height]
  );

  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    document.body.appendChild(element);

    return () => {
      document.body.removeChild(element);
    };
  });

  return ReactDOM.createPortal(
    <BackgroundDim style={{ display: visible ? 'block' : 'none' }}>
      <ModalContainer
        ref={ref}
        {...props}
        style={{ ...containerStyle, ...styles }}
      >
        {children}
      </ModalContainer>
    </BackgroundDim>,
    element
  );
};

export default Modal;

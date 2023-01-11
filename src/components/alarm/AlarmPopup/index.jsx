import useClickAway from '../../../hooks/useClickAway';
import ReactDOM from 'react-dom';
import { useMemo, useEffect } from 'react';
import AlarmPopupItem from '../AlarmPopupItem';
import { AlarmPopupContainer, Title, AlarmList } from './style';

const AlarmPopup = ({ visible = false, onClose, target, alarms }) => {
  const ref = useClickAway(() => {
    onClose && onClose();
  });

  const element = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    if (target) {
      target.appendChild(element);
      return () => {
        target.removeChild(element);
      };
    }
  });

  return ReactDOM.createPortal(
    <AlarmPopupContainer ref={ref} style={{ display: visible ? 'block' : 'none' }}>
      <Title>알람</Title>
      <AlarmList>
        {alarms && alarms.map((alarm) => <AlarmPopupItem key={alarm._id} alarm={alarm} />)}
      </AlarmList>
    </AlarmPopupContainer>,
    element
  );
};

export default AlarmPopup;

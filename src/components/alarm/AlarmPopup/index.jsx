import ReactDOM from 'react-dom';
import useAlarm from '../../../hooks/useAlarm';
import useClickAway from '../../../hooks/useClickAway';
import AlarmPopupItem from '../AlarmPopupItem';
import { AlarmList, AlarmNoItem, AlarmPopupContainer, Title } from './style';

const AlarmPopup = ({ visible = false, onClose, target, alarms }) => {
  const { element, handleClickAlarm } = useAlarm(target, onClose);
  const ref = useClickAway(() => {
    onClose && onClose();
  });

  return ReactDOM.createPortal(
    <AlarmPopupContainer ref={ref} style={{ display: visible ? 'block' : 'none' }}>
      <Title>알람</Title>
      <AlarmList>
        {alarms.length ? (
          alarms.map((alarm) => (
            <AlarmPopupItem
              key={alarm._id}
              alarm={alarm}
              onClick={() => handleClickAlarm(alarm.post)}
            />
          ))
        ) : (
          <AlarmNoItem>알람이 없습니다!</AlarmNoItem>
        )}
      </AlarmList>
    </AlarmPopupContainer>,
    element
  );
};

export default AlarmPopup;

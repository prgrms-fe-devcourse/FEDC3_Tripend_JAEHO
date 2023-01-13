import useClickAway from '../../../hooks/useClickAway';
import ReactDOM from 'react-dom';
import { useMemo, useEffect } from 'react';
import AlarmPopupItem from '../AlarmPopupItem';
import { AlarmPopupContainer, Title, AlarmList } from './style';
import { useSetRecoilState } from 'recoil';
import { selectedPostState } from '../../../recoil/RecoilPostStates';

const AlarmPopup = ({ visible = false, onClose, target, alarms }) => {
  const setPostId = useSetRecoilState(selectedPostState);

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

  const handleClickAlarm = (postId) => {
    setPostId(postId);
    onClose();
  };

  return ReactDOM.createPortal(
    <AlarmPopupContainer ref={ref} style={{ display: visible ? 'block' : 'none' }}>
      <Title>알람</Title>
      <AlarmList>
        {alarms &&
          alarms.map((alarm) => (
            <AlarmPopupItem
              key={alarm._id}
              author={alarm.author}
              onClick={() => handleClickAlarm(alarm.post)}
            />
          ))}
      </AlarmList>
    </AlarmPopupContainer>,
    element
  );
};

export default AlarmPopup;

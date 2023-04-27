import useClickAway from '@/hooks/useClickAway';
import { selectedPostState } from '@/recoil/postStates';
import { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import AlarmPopupItem from '../AlarmPopupItem';
import { AlarmList, AlarmNoItem, AlarmPopupContainer, Title } from './style';

interface AlarmPopup {
  visible: boolean;
  onClose: () => void;
  target: HTMLElement;
  alarms: object[];
}

const AlarmPopup = ({ visible = false, onClose, target, alarms }: AlarmPopup) => {
  const navigate = useNavigate();
  const setPostId = useSetRecoilState(selectedPostState);
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if (target) {
      target.appendChild(element);
      return () => {
        target.removeChild(element);
      };
    }
  });

  const handleClickAlarm = (postId: string) => {
    setPostId(postId);
    navigate(`/p/${postId}`);
    onClose();
  };

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

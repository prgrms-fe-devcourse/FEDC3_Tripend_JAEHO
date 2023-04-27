import useClickAway from '@/hooks/useClickAway';
import { selectedPostState } from '@/recoil/postStates';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import AlarmPopupItem from '../AlarmPopupItem';
import { AlarmList, AlarmNoItem, AlarmPopupContainer, Title } from './style';
import { Alarm } from '../types';
interface AlarmPopupProps {
  visible: boolean;
  target: HTMLElement;
  alarms: Alarm[];
  onClose: () => void;
}

const AlarmPopup = ({ visible = false, onClose, target, alarms }: AlarmPopupProps) => {
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

  const handleClickAlarm = (postId: string | undefined) => {
    if (!postId) return;
    setPostId(postId);
    navigate(`/p/${postId}`);
    onClose();
  };

  const ref = useClickAway(() => {
    onClose && onClose();
  });

  return (
    <>
      ReactDOM.createPortal(
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
      </AlarmPopupContainer>
      , element );
    </>
  );
};

export default AlarmPopup;

import useClickAway from '../../../hooks/useClickAway';
import ReactDOM from 'react-dom';
import { useMemo, useEffect } from 'react';
import AlarmPopupItem from '../AlarmPopupItem';
import { AlarmPopupContainer, Title, AlarmList } from './style';
import { useSetRecoilState } from 'recoil';
import { selectedPostState } from '../../../recoil/postStates';
import { useNavigate } from 'react-router-dom';

const AlarmPopup = ({ visible = false, onClose, target, alarms }) => {
  const navigate = useNavigate();
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
    navigate(`/p/${postId}`);
    onClose();
  };

  return ReactDOM.createPortal(
    <AlarmPopupContainer ref={ref} style={{ display: visible ? 'block' : 'none' }}>
      <Title>알람</Title>
      <AlarmList>
        {alarms &&
          alarms.map(({ _id, author, post }) => (
            <AlarmPopupItem key={_id} author={author} onClick={() => handleClickAlarm(post)} />
          ))}
      </AlarmList>
    </AlarmPopupContainer>,
    element
  );
};

export default AlarmPopup;

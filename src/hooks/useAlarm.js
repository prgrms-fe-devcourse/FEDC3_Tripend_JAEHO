import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { selectedPostState } from '../recoil/postStates';

const useAlarm = (target) => {
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

  const handleClickAlarm = (postId) => {
    setPostId(postId);
    navigate(`/p/${postId}`);
    onClose();
  };
  return { element, handleClickAlarm };
};

export default useAlarm;

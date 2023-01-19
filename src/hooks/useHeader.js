import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { getMyAlarms } from '../apis/alarm';
import { isVisibleModalState } from '../recoil/addPostStates';
import { userLoginState } from '../recoil/authState';
import { toggleStateFamily } from '../recoil/toggleStates';
import { TOKEN, USER_IMAGE } from '../utils/constants/auth';
import { getStorage, setStorage } from '../utils/storage';

const useHeader = () => {
  const navigate = useNavigate();

  const getToken = getStorage(TOKEN);
  const userImage = getStorage(USER_IMAGE);

  const [alarmBox, setAlarmBox] = useState();
  const [alarms, setAlarms] = useState([]);
  const setIsLogin = useSetRecoilState(userLoginState);
  const [isAlarmOpen, setIsAlarmOpen] = useRecoilState(toggleStateFamily('alarm'));

  const [isVisibleModal, setIsVisibleModal] = useRecoilState(isVisibleModalState);
  const handleOpenAddPostModal = () => {
    setIsVisibleModal(true);
  };

  const fetchAlarms = async () => {
    const { data } = await getMyAlarms();
    setAlarms(data);
  };

  useEffect(() => {
    if (getToken) {
      fetchAlarms();
    }
  }, [getToken]);

  const handleClickLogo = () => {
    getToken ? navigate('/main') : navigate('/');
  };

  const handleOpenAlarm = async ({ target }) => {
    if (!isAlarmOpen) {
      setAlarmBox(target.closest('section'));
      setIsAlarmOpen(true);
    }
  };
  const handleLogout = () => {
    setStorage(TOKEN, '');
    setIsLogin(false);
    navigate('/');
  };

  const handleCloseAlarm = () => {
    setIsAlarmOpen(false);
  };

  const handleOpenMyPage = () => {
    navigate('/myhome');
  };

  return {
    isVisibleModal,
    handleOpenAddPostModal,
    handleCloseAlarm,
    handleOpenAlarm,
    handleLogout,
    handleClickLogo,
    handleOpenMyPage,
    alarms,
    alarmBox,
    userImage,
    getToken,
    isAlarmOpen,
  };
};

export default useHeader;

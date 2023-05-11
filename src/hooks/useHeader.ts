import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { getMyAlarms } from '@/apis/alarm';
import { isVisibleModalState } from '@/recoil/addPostStates';
import { userLoginState } from '@/recoil/authState';
import { toggleStateFamily } from '@/recoil/toggleStates';
import { TOKEN, USER_IMAGE } from '@/utils/constants/auth';
import { getStorage, setStorage } from '@/utils/storage';
import { AxiosResponse } from 'axios';

const useHeader = () => {
  const navigate = useNavigate();

  const getToken = getStorage(TOKEN);
  const userImage = getStorage(USER_IMAGE);

  const [alarmBox, setAlarmBox] = useState<Element>();
  const [alarms, setAlarms] = useState([]);
  const setIsLogin = useSetRecoilState(userLoginState);
  const [isAlarmOpen, setIsAlarmOpen] = useRecoilState(toggleStateFamily('alarm'));

  const [isVisibleModal, setIsVisibleModal] = useRecoilState(isVisibleModalState);
  const handleOpenAddPostModal = () => {
    setIsVisibleModal(true);
  };

  const fetchAlarms = async () => {
    const response = (await getMyAlarms()) as AxiosResponse;
    const { data } = response;
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

  const handleOpenAlarm = async ({ target }: { target: Element }) => {
    const element = target.closest('section');

    if (!isAlarmOpen && element) {
      setAlarmBox(element);
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

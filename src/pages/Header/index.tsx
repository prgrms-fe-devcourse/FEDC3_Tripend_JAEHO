import { useLocation, useNavigate } from 'react-router-dom';
import AlarmPopup from '@/components/Common/Alarm/AlarmPopup';
import Avatar from '@/components/Common/Avatar';
import Icon from '@/components/Common/Icons';
import Badge from '@/components/Common/Icons/Badge';
import PostCreate from '@/components/Post/PostCreate';
import { AlarmContainer, ButtonContainer, HeaderContainer, IconItem, LogoContainer } from './style';
import logoIcon from '/assets/Logo.svg';
import { TOKEN, USER_IMAGE } from '@/utils/constants/auth';
import { isVisibleModalState } from '@/recoil/addPostStates';
import { getStorage, setStorage } from '@/utils/storage';
import { MouseEvent, MouseEventHandler, useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userLoginState } from '@/recoil/authState';
import { toggleStateFamily } from '@/recoil/toggleStates';
import { getMyAlarms } from '@/apis/alarm';

const Header = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const getToken = getStorage(TOKEN);
  const userImage = getStorage(USER_IMAGE);
  const [alarmBox, setAlarmBox] = useState<HTMLElement>();
  const [alarms, setAlarms] = useState([]);
  const setIsLogin = useSetRecoilState(userLoginState);
  const [isAlarmOpen, setIsAlarmOpen] = useRecoilState<boolean>(toggleStateFamily('alarm'));

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

  const handleOpenAlarm = async ({ target }: MouseEvent) => {
    if (!isAlarmOpen && target instanceof HTMLElement) {
      setAlarmBox(target.closest('section') as HTMLElement);
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

  return (
    <HeaderContainer isRoot={pathname === '/'}>
      <LogoContainer onClick={handleClickLogo}>
        <img src={logoIcon} alt="logo-icon" />
      </LogoContainer>

      {getToken && (
        <>
          <PostCreate />
          <ButtonContainer>
            <IconItem onClick={handleOpenAddPostModal}>
              <Icon.AddPostIcon />
            </IconItem>
            <AlarmContainer>
              <IconItem onClick={handleOpenAlarm}>
                <Icon.Alarm />
                {alarms.length > 0 && (
                  <Badge top={'9px'} right={'18px'} size={'5px'} color={'#ff4741'} />
                )}
              </IconItem>
            </AlarmContainer>
            <IconItem onClick={handleLogout}>
              <Icon.LogoutIcon />
            </IconItem>
            <IconItem onClick={handleOpenMyPage}>
              <Avatar
                shape="circle"
                size="30px"
                src={userImage === 'undefined' ? null : userImage}
                lazy={true}
                threshold={0.1}
              />
            </IconItem>
          </ButtonContainer>
          {isVisibleModal && <PostCreate visible={isVisibleModal} />}
          <AlarmPopup
            visible={isAlarmOpen}
            onClose={handleCloseAlarm}
            target={alarmBox}
            alarms={alarms}
          />
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;

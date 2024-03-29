import { getMyAlarms } from '@/apis/alarm';
import AlarmPopup from '@/components/Common/Alarm/AlarmPopup';
import { Alarm } from '@/components/Common/Alarm/types';
import Avatar from '@/components/Common/Avatar';
import Icon from '@/components/Common/Icons';
import Badge from '@/components/Common/Icons/Badge';
import PostCreate from '@/components/Post/PostCreate';
import SearchPost from '@/components/Post/PostSearch';
import { isVisibleModalState } from '@/recoil/addPostStates';
import { userLoginState } from '@/recoil/authState';
import { TOKEN, USER_IMAGE } from '@/utils/constants/auth';
import { getStorage, setStorage } from '@/utils/storage';
import { MouseEvent, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  AlarmContainer,
  ButtonContainer,
  HeaderContainer,
  IconItem,
  LogoContainer,
} from './style';
import logoIcon from '/assets/Logo.svg';

const Header = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const getToken = getStorage(TOKEN);
  const userImage = getStorage(USER_IMAGE);
  const [alarmBox, setAlarmBox] = useState<HTMLElement>();

  const { data: alarms } = useQuery<Alarm[]>(['alarms'], getMyAlarms, {
    enabled: !!getToken,
  });

  const setIsLogin = useSetRecoilState(userLoginState);
  const [isAlarmOpen, setIsAlarmOpen] = useState(false);

  const [isVisibleModal, setIsVisibleModal] =
    useRecoilState(isVisibleModalState);
  const handleOpenAddPostModal = () => {
    setIsVisibleModal(true);
  };

  const handleClickLogo = () => {
    getToken ? navigate('/main') : navigate('/');
  };

  const handleOpenAlarm = async ({ target }: MouseEvent) => {
    if (!isAlarmOpen) {
      const section = (target as HTMLElement).closest('section');
      if (section) setAlarmBox(section);
      setIsAlarmOpen(true);
    } else {
      setIsAlarmOpen(false);
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
          <SearchPost />
          <ButtonContainer>
            <IconItem onClick={handleOpenAddPostModal}>
              <Icon.AddPostIcon />
            </IconItem>
            <AlarmContainer>
              <IconItem onClick={handleOpenAlarm}>
                <Icon.Alarm />
                {alarms !== undefined && alarms?.length > 0 && (
                  <Badge
                    top={'9px'}
                    right={'18px'}
                    size={'5px'}
                    color={'#ff4741'}
                  />
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

import { useLocation } from 'react-router-dom';
import Logo from '../../../static/images/Logo.svg';
import AddPost from '../../components/AddPost';
import AlarmPopup from '../../components/Alarm/AlarmPopup';
import Avatar from '../../components/Common/Avatar';
import Icon from '../../components/Common/Icons';
import Badge from '../../components/Common/Icons/Badge';
import SearchPost from '../../components/SearchPost';
import useHeader from '../../hooks/useHeader';
import { AlarmContainer, ButtonContainer, HeaderContainer, IconItem, LogoContainer } from './style';

const Header = () => {
  const { pathname } = useLocation();

  const {
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
  } = useHeader();

  return (
    <HeaderContainer isRoot={pathname === '/'}>
      <LogoContainer onClick={handleClickLogo}>
        <Logo />
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
          {isVisibleModal && <AddPost visible={isVisibleModal} />}
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

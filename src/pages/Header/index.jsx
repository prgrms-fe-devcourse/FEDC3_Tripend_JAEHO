import Logo from '../../../static/images/Logo.svg';
import AddPost from '../../components/addPost';
import AlarmPopup from '../../components/Alarm/AlarmPopup';
import Avatar from '../../components/common/Avatar';
import Icon from '../../components/common/Icons';
import SearchPost from '../../components/SearchPost';
import useHeader from '../../hooks/useHeader';
import {
  AlarmContainer,
  ButtonContainer,
  HeaderContainer,
  IconItem,
  LogoContaniner,
} from './style';

const Header = () => {
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
    <HeaderContainer>
      <LogoContaniner onClick={handleClickLogo}>
        <Logo />
      </LogoContaniner>

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
              </IconItem>
            </AlarmContainer>
            <IconItem onClick={handleLogout}>
              <Icon.LogoutIcon />
            </IconItem>
            <IconItem onClick={handleOpenMyPage}>
              <Avatar shape="circle" size="30px" src={userImage} lazy={true} threshold={0.1} />
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

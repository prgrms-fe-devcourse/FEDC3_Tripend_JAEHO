import Avatar from '../../components/common/Avatar';
import AlarmPopup from '../../components/Alarm/AlarmPopup';
import Logo from '../../../static/images/Logo.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { isVisibleModalState } from '../../recoil/addPostStates';
import { toggleStateFamily } from '../../recoil/toggleStates';
import { userLoginState } from '../../recoil/authState';
import { getMyAlarms } from '../../apis/alarm';
import {
  HeaderContainer,
  LogoContaniner,
  ButtonContainer,
  IconItem,
  AlarmContainer,
} from './style';
import { getStorage, setStorage } from '../../utils/storage';
import { TOKEN, USERIMAGE } from '../../utils/constant/auth';
import PrivateHeader from './PrivateHeaderContainer';
import SearchPost from '../../components/SearchPost';
import AddPost from '../../components/addPost';
import Icon from '../../components/common/Icon';

const Header = () => {
  const isVisibleModal = useRecoilValue(isVisibleModalState);

  const navigate = useNavigate();
  const [alarmBox, setAlarmBox] = useState();
  const [alarms, setAlarms] = useState([]);
  const setIsLogin = useSetRecoilState(userLoginState);
  const [isAlarmOpen, setIsAlarmOpen] = useRecoilState(toggleStateFamily('alarm'));

  const setIsVisibleModal = useSetRecoilState(isVisibleModalState);

  const getToken = getStorage(TOKEN);
  const userImage = getStorage(USERIMAGE);

  const handleClickLogo = () => {
    // isLogin ? navigate('/main') : navigate('/');
    navigate('/main');
  };

  const handleAlarmOpen = async ({ target }) => {
    if (!isAlarmOpen) {
      setAlarmBox(target.closest('section'));
      setIsAlarmOpen(true);
      const response = await getMyAlarms();
      setAlarms(response.data);
    }
  };
  const handleLogout = () => {
    setStorage(TOKEN, '');
    setIsLogin(false);
    navigate('/');
  };

  const handleAlarmClose = () => {
    setIsAlarmOpen(false);
  };

  const handleOpenAddPostModal = () => {
    setIsVisibleModal(true);
  };

  const handleOpenMyPage = () => {
    navigate('/myhome');
  };

  return (
    <>
      {getToken ? (
        <HeaderContainer>
          <LogoContaniner onClick={handleClickLogo}>
            <Logo />
          </LogoContaniner>

          <>
            <SearchPost />
            <ButtonContainer>
              <IconItem onClick={handleOpenAddPostModal}>
                <Icon.AddPostIcon />
              </IconItem>
              <AlarmContainer>
                <IconItem onClick={handleAlarmOpen}>
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
              onClose={handleAlarmClose}
              target={alarmBox}
              alarms={alarms}
            />
          </>
        </HeaderContainer>
      ) : (
        <PrivateHeader />
      )}
    </>
  );
};

export default Header;

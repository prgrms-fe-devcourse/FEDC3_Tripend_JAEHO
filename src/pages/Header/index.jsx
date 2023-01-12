import Alarm from '../../components/Alarm';
import Avatar from '../../components/common/Avatar';
import AlarmPopup from '../../components/Alarm/AlarmPopup';
import Logo from '../../../static/images/Logo.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { userLoginButtonShowState, userLoginState } from '../../recoil/auth';
import { toggleStateFamily } from '../../recoil/RecoilToggleStates';
import { getMyAlarms } from '../../apis/alarm';
import LogoutIcon from '@mui/icons-material/Logout';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import {
  HeaderContainer,
  LogoContaniner,
  ButtonContainer,
  SearchContainer,
  HeaderUl,
  IconItem,
  AlarmContainer,
} from './style';
import { getStorage, setStorage } from '../../utils/storage';
import { TOKEN } from '../../utils/auth/constant';
import { isVisibleModalState } from '../../recoil/addPostStates';
import PrivateHeader from './PrivateHeaderContainer';
import SearchPost from '../../components/SearchPost';

const Header = () => {
  const navigate = useNavigate();
  const [alarmBox, setAlarmBox] = useState();
  const [alarms, setAlarms] = useState([]);
  const [isLogin, setIsLogin] = useRecoilState(userLoginState);
  const [isNextPage, setIsNextPage] = useRecoilState(userLoginButtonShowState);
  const [isAlarmOpen, setIsAlarmOpen] = useRecoilState(toggleStateFamily('alarm'));

  const setIsVisibleModal = useSetRecoilState(isVisibleModalState);

  const getToken = getStorage(TOKEN);

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
                <AddBoxOutlinedIcon />
              </IconItem>
              <AlarmContainer>
                <IconItem onClick={handleAlarmOpen}>
                  <Alarm />
                </IconItem>
              </AlarmContainer>
              <IconItem onClick={handleOpenAddPostModal}>
                <LogoutIcon />
              </IconItem>
              <IconItem>
                <Avatar src="https://picsum.photos/200" size={35} />
              </IconItem>
            </ButtonContainer>
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

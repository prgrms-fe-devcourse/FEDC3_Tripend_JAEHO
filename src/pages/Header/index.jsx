import AddPost from '../../components/addPost';
import Alarm from '../../components/Alarm';
import Avatar from '../../components/common/Avatar';
import AlarmPopup from '../../components/Alarm/AlarmPopup';
import Logo from '../../../static/images/Logo.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userLoginButtonShowState, userLoginState } from '../../recoil/auth';
import { HeaderButton } from '../../components/common/Button';
import { toggleStateFamily } from '../../recoil/RecoilToggleStates';
import { getMyAlarms } from '../../apis/alarm';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  HeaderContainer,
  LogoContaniner,
  ButtonContainer,
  SearchContainer,
  HeaderUl,
  IconItem,
  AlarmContainer,
} from './style';
import { setStorage } from '../../utils/storage';
import { TOKEN } from '../../utils/auth/constant';

const Header = () => {
  const navigate = useNavigate();
  const [alarmBox, setAlarmBox] = useState();
  const [alarms, setAlarms] = useState([]);
  const [isLogin, setIsLogin] = useRecoilState(userLoginState);
  const [isNextPage, setIsNextPage] = useRecoilState(userLoginButtonShowState);
  const [isAlarmOpen, setIsAlarmOpen] = useRecoilState(toggleStateFamily('alarm'));

  const handleClickLogo = () => {
    isLogin ? navigate('/HomePage') : navigate('/');
  };

  const handleSignUp = () => {
    setIsNextPage(!isNextPage);
    navigate('/signup');
  };

  const handleSignIn = () => {
    setIsNextPage(!isNextPage);
    navigate('/');
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
  const handleClickAddPost = () => {};

  return (
    <>
      <HeaderContainer>
        <LogoContaniner onClick={handleClickLogo}>
          <Logo />
        </LogoContaniner>
        {isLogin ? (
          <>
            <SearchContainer>
              <input type="text" />
            </SearchContainer>
            <ButtonContainer>
              <IconItem onClick={handleClickAddPost}>
                <AddPost />
              </IconItem>
              <AlarmContainer>
                <IconItem onClick={handleAlarmOpen}>
                  <Alarm />
                </IconItem>
              </AlarmContainer>
              <IconItem onClick={handleLogout}>
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
        ) : (
          <></>
          // <ButtonContainer>
          //   {isNextPage ? (
          //     <HeaderUl>
          //       <HeaderButton onClick={handleSignUp}>회원가입</HeaderButton>
          //     </HeaderUl>
          //   ) : (
          //     <HeaderUl>
          //       <HeaderButton onClick={handleSignIn}>로그인</HeaderButton>
          //     </HeaderUl>
          //   )}
          // </ButtonContainer>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;

import styled from '@emotion/styled';
import AddPost from '../../components/addPost';
import Alarm from '../../components/alarm';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userLoginButtonShowState, userLoginState } from '../../recoil/auth';

const Header = () => {
  const naviaget = useNavigate();
  const isLogin = useRecoilValue(userLoginState);
  const [isNextPage, setIsNextPage] = useRecoilState(userLoginButtonShowState);

  const handleSignUp = (e) => {
    console.log(e.target);
    setIsNextPage(!isNextPage);
    naviaget('/signup');
  };

  const handleSignIn = (e) => {
    console.log(e.target);
    setIsNextPage(!isNextPage);
    naviaget('/');
  };

  return (
    <>
      {isLogin ? (
        <>
          <HeaderContainer>
            <span>HEADER자리</span>
            <Alarm />
            <AddPost />
          </HeaderContainer>
        </>
      ) : (
        <>
          <LoginHeader>
            <HeaderNavbar>
              <div>
                <span>로그인 회원가입 헤더</span>
              </div>

              {isNextPage ? (
                <HeaderUl>
                  <button onClick={handleSignUp}>회원가입</button>
                </HeaderUl>
              ) : (
                <HeaderUl>
                  <button onClick={handleSignIn}>로그인</button>
                </HeaderUl>
              )}
            </HeaderNavbar>
          </LoginHeader>
        </>
      )}
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #000;
`;

const LoginHeader = styled.div`
  text-align: start;
  padding-bottom: 1rem;
  height: 3rem;
  border-bottom: 2px solid #dee2e6;
`;

const HeaderNavbar = styled.nav`
  display: flex;
  height: 60px;
  justify-content: space-between;
`;

const HeaderUl = styled.ul``;

import { useSigninForm } from '../../hooks/useSigninForm';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import {
  LoginBlock,
  LoginWrapper,
  LoginContainer,
  FormLogin,
  FormLoginText,
  Fieldset,
  Input,
  FormButton,
  FormFailedText,
  FormSignupText,
} from './style';
import { userLoginButtonShowState } from '../../recoil/authState';

const Login = () => {
  const { email, password, handleEmail, handlePassword, isLoading, handleSubmit } = useSigninForm();

  const navigate = useNavigate();

  const setLoginButton = useSetRecoilState(userLoginButtonShowState);

  const handleClickSignUp = () => {
    navigate('/signup');
    setLoginButton(false);
  };

  return (
    <LoginBlock>
      <LoginWrapper>
        <LoginContainer>
          <FormLogin onSubmit={handleSubmit}>
            <h3>로그인</h3>
            <FormLoginText>Login to access your Tripend account</FormLoginText>

            <Fieldset>
              <legend>이메일</legend>
              <Input type="text" onChange={handleEmail} />
            </Fieldset>

            <Fieldset>
              <legend>비밀번호</legend>
              <Input type="password" onChange={handlePassword} />
            </Fieldset>

            <FormButton type="submit" disabled={!email || !password}>
              로그인
            </FormButton>
            <FormFailedText style={isLoading ? { color: 'red' } : { display: 'none' }}>
              등록된 계정이 없습니다.
            </FormFailedText>

            <FormSignupText>
              Don't have an account?{' '}
              <span onClick={handleClickSignUp} style={{ color: 'red', cursor: 'pointer' }}>
                회원가입
              </span>
            </FormSignupText>
          </FormLogin>
        </LoginContainer>
      </LoginWrapper>
    </LoginBlock>
  );
};

export default Login;

import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useCallback, useState, FormEvent, ChangeEvent } from 'react';
import { userLoginButtonShowState, userLoginState } from '@/recoil/authState';
import { postUserLogin } from '@/apis/auth';
import {
  Fieldset,
  FormButton,
  FormFailedText,
  FormLogin,
  FormLoginText,
  FormSignupText,
  Input,
  LoginBlock,
  LoginContainer,
  LoginTitle,
  LoginWrapper,
} from './style';

const Signin = () => {
  const navigate = useNavigate();
  const setLogin = useSetRecoilState(userLoginState);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [isLoading, setLoading] = useState(false);
  const setLoginButton = useSetRecoilState(userLoginButtonShowState);

  const handleEmail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    [email]
  );

  const handlePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [password]
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await postUserLogin(email, password);

      if (res?.status === 200) {
        setLogin(true);
        navigate('/main');
      }
    } catch (e) {
      setLoading(true);
      throw new Error('로그인 실패');
    }
  };

  const handleClickSignUp = () => {
    navigate('/signup');
    setLoginButton(false);
  };

  return (
    <LoginBlock>
      <LoginWrapper>
        <LoginContainer>
          <FormLogin onSubmit={handleSubmit}>
            <LoginTitle>로그인</LoginTitle>
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

export default Signin;

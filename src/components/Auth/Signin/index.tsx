import { postUserLogin } from '@/apis/auth';
import { userLoginButtonShowState, userLoginState } from '@/recoil/authState';
import { ID, TOKEN, USER_IMAGE } from '@/utils/constants/auth';
import { setStorage } from '@/utils/storage';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import {
  Fieldset,
  FormButton,
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

  const mutation = useMutation(postUserLogin, {
    onSuccess: (response) => {
      setLogin(true);

      const { token } = response;
      const { _id, image } = response.user;

      setStorage(TOKEN, token);
      setStorage(ID, _id);
      setStorage(USER_IMAGE, image);
      navigate('/main');
    },
    onError: () => {
      throw new Error('로그인에 실패하였습니다');
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ email, password });
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

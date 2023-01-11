import {
  Fieldset,
  FormButton,
  FormLogin,
  LoginContainer,
  LoginWrapper,
} from '../Signin/Login.style';
import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';
import { putPaswwordChange } from '../../apis/auth';
import { ERROR_MESSAGE_AUTH, USER } from '../../utils/auth/constant';

const MyHomeSetting = () => {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setConfirmPassword] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');

  const handlePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [password]
  );

  const handleNewPassword = useCallback(
    (e) => {
      setConfirmPassword(e.target.value);
      if (password !== passwordConfirm) {
        setPasswordConfirmError(AUTH.PASSWORD_FAILED);
      }
    },
    [passwordConfirm]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await putPaswwordChange(password);

    if (res.status === 200) {
      swal(USER.CHANGE_PASSWORD_SUCCESS, '', ERROR_MESSAGE_AUTH.PASSWORD_SUCCESS);
    }

    setPassword('');
    setConfirmPassword('');
  };

  return (
    <PasswordBlock>
      <LoginWrapper>
        <LoginContainer>
          <FormLogin onSubmit={handleSubmit}>
            <FormSettingText>비밀번호 변경</FormSettingText>

            <Fieldset>
              <legend>비밀번호</legend>
              <Input
                value={password}
                type="text"
                style={{ '-webkit-text-security': 'circle' }}
                onChange={handlePassword}
              />
            </Fieldset>

            <Fieldset>
              <legend>비밀번호 확인</legend>
              <Input
                value={passwordConfirm}
                style={{ '-webkit-text-security': 'circle' }}
                type="text"
                onChange={handleNewPassword}
              />
            </Fieldset>
            {passwordConfirm.length > 0 && password !== passwordConfirm && (
              <PasswordText>{passwordConfirmError}</PasswordText>
            )}
            <FormButton
              type="submit"
              disabled={!password || !passwordConfirm || password !== passwordConfirm}
            >
              버튼
            </FormButton>
          </FormLogin>
        </LoginContainer>
      </LoginWrapper>
    </PasswordBlock>
  );
};
export default MyHomeSetting;

const FormSettingText = styled.h3`
  font-size: 0.4rem;
`;

const PasswordBlock = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 2px;
  outline: none;
  font-size: 1rem;

  &:focus {
    color: #495057;
    border-color: black;
  }
`;

const PasswordText = styled.span`
  color: red;
  margin-top: 100px;
`;

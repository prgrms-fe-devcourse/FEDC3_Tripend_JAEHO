import {
  Fieldset,
  FormButton,
  FormLogin,
  LoginContainer,
  LoginWrapper,
} from '../Signin/Login.style';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const MyHomeSetting = () => {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setConfirmPassword] = useState('');
  const [ispasswordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState('');

  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };

  const handlerNewPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== passwordConfirm) {
      setPasswordError(false);
      setPasswordConfirmError('비밀번호가 틀렸어요 ㅠㅠ');
    }
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();

    if (res.status === 200) {
      swal('비밀번호 변경이 완료되었습니다.', '', 'success');
    }

    setPassword('');
    setConfirmPassword('');
  };

  return (
    <>
      <PasswordBlock>
        <LoginWrapper>
          <LoginContainer>
            <FormLogin>
              <FormSettingText>비밀번호 변경</FormSettingText>

              <Fieldset>
                <legend>비밀번호</legend>
                <Input
                  value={password}
                  type="text"
                  style={{ '-webkit-text-security': 'circle' }}
                  onChange={handlerPassword}
                />
              </Fieldset>

              <Fieldset>
                <legend>비밀번호 확인</legend>
                <Input
                  value={passwordConfirm}
                  style={{ '-webkit-text-security': 'circle' }}
                  type="text"
                  onChange={handlerNewPassword}
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
    </>
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

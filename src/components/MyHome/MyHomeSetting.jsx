import {
  Fieldset,
  FormButton,
  FormLogin,
  LoginContainer,
  LoginWrapper,
} from '../Signin/Login.style';
import styled from '@emotion/styled';

const MyHomeSetting = () => {
  return (
    <>
      <PasswordBlock>
        <LoginWrapper>
          <LoginContainer>
            <FormLogin>
              <FormSettingText>비밀번호 변경</FormSettingText>

              <Fieldset>
                <legend>비밀번호</legend>
                <Input />
              </Fieldset>

              <Fieldset>
                <legend>비밀번호 확인</legend>
                <Input />
              </Fieldset>

              <FormButton>버튼</FormButton>
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

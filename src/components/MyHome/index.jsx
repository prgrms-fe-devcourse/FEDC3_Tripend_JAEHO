import { Fieldset, FormButton, FormLogin, LoginContainer, LoginWrapper } from '../Signin/style';
import { FormSettingText, Input, PasswordBlock, PasswordText } from './style';
import { useNewPassWordForm } from '../../hooks/useNewPassWordForm';

const UserSettingPassword = () => {
  const [handleChange, handleSubmit, values] = useNewPassWordForm();

  return (
    <>
      <PasswordBlock>
        <LoginWrapper>
          <LoginContainer>
            <FormLogin onSubmit={handleSubmit}>
              <FormSettingText>비밀번호 변경</FormSettingText>

              <Fieldset>
                <legend>비밀번호</legend>

                <Input
                  name="password"
                  value={values.password}
                  type="password"
                  onChange={handleChange}
                />
              </Fieldset>

              <Fieldset>
                <legend>비밀번호 확인</legend>
                <Input
                  name="newPassword"
                  value={values.newPassword}
                  type="password"
                  onChange={handleChange}
                />
              </Fieldset>

              {values.newPassword.length > 0 && values.password !== values.newPassword && (
                <PasswordText>
                  {/*{passwordConfirmError}*/}
                  버튼
                </PasswordText>
              )}
              <FormButton
                type="submit"
                disabled={
                  !values.password || !values.newPassword || values.password !== values.newPassword
                }
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

export default UserSettingPassword;

import { Fieldset, FormButton, FormLogin, LoginContainer, LoginWrapper } from '../Signin/style';
import { FormSettingText, Input, PasswordBlock, PasswordText } from './style';
import { useNewPassWordForm } from '../../hooks/useNewPassWordForm';
import { USER as AUTH } from '../../utils/constant/auth';

const UserSettingPassword = () => {
  const [handleChange, handleSubmit, values, passwordError] = useNewPassWordForm();

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
                <PasswordText>{AUTH.PASSWORD_FAILED}</PasswordText>
              )}
              <FormButton
                type="submit"
                disabled={
                  !values.password || !values.newPassword || values.password !== values.newPassword
                }
              >
                비밀번호 변경
              </FormButton>
            </FormLogin>
          </LoginContainer>
        </LoginWrapper>
      </PasswordBlock>
    </>
  );
};

export default UserSettingPassword;

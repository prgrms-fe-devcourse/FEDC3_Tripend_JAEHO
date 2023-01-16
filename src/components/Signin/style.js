import styled from '@emotion/styled';

const LoginBlock = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
`;

const Fieldset = styled.fieldset`
  height: 35px;
  margin-bottom: 20px;
`;

const LoginWrapper = styled.div`
  width: 400px;
  height: 320px;
  padding: 5rem;
  border-radius: 2px;
  position: relative;
  bottom: 50px;
`;

const LoginContainer = styled.div`
  margin-top: 1rem;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 2px;
  outline: none;
  font-size: 1rem;

  background-color: #f8f9fa;
  &:focus {
    color: #495057;
    border-color: black;
  }
`;

const FormSignupText = styled.p`
  text-align: center;
  font-size: 0.8rem;
`;

const FormLoginText = styled.p`
  font-size: 10px;
  margin-right: 50px;
  color: #9ca3af;
`;

const FormFailedText = styled.p`
  font-size: 10px;
  text-align: center;
`;

const FormLogin = styled.form`
  h3 {
    font-size: 1.5rem;
    margin-right: 200px;
  }

  div {
    display: flex;
    justify-content: flex-end;
    width: 150%;
  }
`;

const FormButton = styled.button`
  width: 100%;
  height: 3rem;
  padding: 0.7rem;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  outline: none;
  font-size: 1.2rem;
  margin-top: 1rem;
  text-align: center;
  background-color: #8dd3bb;
  &:focus {
    color: #495057;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

export {
  LoginBlock,
  LoginWrapper,
  LoginContainer,
  Input,
  FormSignupText,
  FormLoginText,
  FormFailedText,
  FormLogin,
  FormButton,
  Fieldset,
};

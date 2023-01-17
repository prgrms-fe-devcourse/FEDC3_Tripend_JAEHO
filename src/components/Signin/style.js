import styled from '@emotion/styled';
import '../../index.css';

const LoginTitle = styled.div`
  font-size: var(--font-title-size);
`;

const LoginBlock = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
`;

const LoginWrapper = styled.div`
  width: 400px;
  height: 10%;
  padding: 5rem;
  border-radius: 2px;
  position: relative;
  bottom: 30%;
`;

const Fieldset = styled.fieldset`
  height: 2.5rem;
  border-radius: 4px;
  margin-bottom: 20px;
  border: 1px solid;
`;

const LoginContainer = styled.div`
  margin-top: 1rem;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 2px;
  outline: none;
  font-size: var(--font-input-size);
  background-color: var(--background-color);

  &:focus {
    color: #495057;
    border-color: black;
  }
`;

const FormSignupText = styled.p`
  text-align: center;
  font-size: var(--font-subtitle-size);
`;

const FormLoginText = styled.p`
  font-size: var(--font-subtitle-size);
  margin-right: 50px;
  color: var(--font-input-color);
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
    width: fit-content;
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
  cursor: pointer;

  &:focus {
    color: #495057;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

export {
  LoginTitle,
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
